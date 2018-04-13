const path = require("path");
const loadConfig = require("@patternplate/load-config");
const webpackEntry = require("@patternplate/webpack-entry");
const MemoryFS = require("memory-fs");
const resolveFrom = require("resolve-from");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = compiler;

const TO_STRING_LOADER = require.resolve("to-string-loader");
const CSS_LOADER = require.resolve("css-loader");
const HTML_LOADER = require.resolve("html-loader");
const COVER = require.resolve("@patternplate/cover-client");
const DEMO = require.resolve("@patternplate/demo-client");
const PROBE = require.resolve("@patternplate/probe-client");

async function compiler(options) {
  const fs = new MemoryFS();
  const { config, filepath } = await loadConfig({ cwd: options.cwd });
  const cwd = typeof filepath === "string" ? path.dirname(filepath) : options.cwd;

  const components = await webpackEntry(config.entry, { cwd });
  const entry = { components };
  const bases = [cwd, process.cwd()].filter(Boolean);

  const render = cascadeResolve(config.render, {bases});
  const mount = cascadeResolve(config.mount, {bases});

  if (options.target === "node") {
    entry.render = render;
  }

  if (options.target === "web") {
    entry.mount = mount;
    entry.demo = DEMO;
    entry.probe = PROBE;
    entry["cover-client"] =  COVER;
  }

  if (typeof config.cover === "string") {
    entry.cover = cascadeResolve(config.cover, {bases});
  }

  const compiler = webpack({
    entry,
    target: options.target,
    externals: options.target === "node" ? [nodeExternals()] : [],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [TO_STRING_LOADER, CSS_LOADER]
        },
        {
          test: /\.html$/,
          use: [HTML_LOADER]
        }
      ]
    },
    output: {
      library: "patternplate-[name]",
      libraryTarget: options.target === "node" ? "commonjs2" : "window",
      path: "/",
      filename: `patternplate.${options.target}.[name].js`
    }
  });

  compiler.outputFileSystem = fs;
  return compiler;
}

function cascadeResolve(id, {bases}) {
  const result = bases.reduce((resolved, base) => {
    if (resolved) {
      return resolved;
    }
    return (resolveFrom.silent || resolveFrom)(base, id);
  }, '');

  if (typeof result !== "string") {
    throw new Error(`Could not resolve "${id}" from ${bases.join(", ")}`);
  }

  return result;
}
