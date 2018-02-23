// const AggregateError = require("aggregate-error");
const path = require("path");
const loadConfig = require("@patternplate/load-config");
const loadMeta = require("@patternplate/load-meta");
const chokidar = require("chokidar");
const commonDir = require("common-dir");
const express = require("express");
const globParent = require("glob-parent");
const micromatch = require("micromatch");
const WebSocket = require("ws");
const debug = require("util").debuglog("PATTERNPLATE");
const Observable = require("zen-observable");

const createCompiler = require("./compiler");
const demo = require("./demo");
const pack = require("./pack");
const main = require("./main");

module.exports = api;

async function api({ server, cwd }) {
  const clientQueue = await createCompiler({ cwd, target: "web" });
  const serverQueue = await createCompiler({ cwd, target: "node" });

  const watcher = await createWatcher({cwd});

  const mw = express()
    .get("/", await main({ cwd }))
    .get("/demo/*/index.html", await demo({ cwd, queue: serverQueue }))
    .use(await pack({ compiler: clientQueue.compiler }));

  mw.subscribe = () => {
    debug("subscribing to webpack and fs events");
    const wss = new WebSocket.Server({server});

    // Prevent client errors (frequently caused by Chrome disconnecting on reload)
    // from bubbling up and killing the server, ref: https://github.com/websockets/ws/issues/1256
    wss.on("connection", ws => {
      ws.on("error", err => {
        if (err.errno === 'ECONNRESET') {
          return;
        }
        console.error(err);
      });
    });

    const send = getSender(wss);
    clientQueue.subscribe();
    serverQueue.subscribe(queue => {
      const [message] = queue;
      send(message);
    });

    watcher.subscribe(message => {
      send(message);
    });
  };

  return mw;
}

async function createWatcher(options) {
  const result = await loadConfig({ cwd: options.cwd });
  const { config = {}, filepath = options.cwd } = result;
  const { entry = [], docs = [] } = config;
  const cwd = path.dirname(filepath);

  // TODO: only **list** relevant manifest paths
  // instead of reading them
  const meta = await loadMeta({
    entry,
    cwd
  });

  const parents = [
    commonDir(meta.map(m => path.join(cwd, m.path))),
    ...docs.map(d => path.join(cwd, globParent(d))),
    ...entry.map(e => path.join(cwd, globParent(e)))
  ];

  let subscribers = [];

  const next = message => subscribers.forEach(subs => subs.next(message));

  const watcher = chokidar.watch(parents, {
    ignoreInitial: true
  });

  debug("subscribing to meta data and documentation changes");
  watcher.on('all', (e, p) => {
    const rel = path.relative(cwd, p);

    if (path.basename(rel) === "pattern.json") {
      next({ type: "change", payload: { file: p, contentType: "pattern" }});
    }
    if (micromatch.some(rel, docs, {matchBase: true})) {
      next({ type: "change", payload: { file: p, contentType: "doc" }});
    }
  });

  return new Observable(subs => {
    subscribers.push(subs);
    return () => {
      subscribers = subscribers.filter(s => s !== subs);
    };
  });
}

function getSender(wss) {
  return message => {
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(message));
      }
    })
  }
}

