import * as chokidar from "chokidar";
import * as Observable from "zen-observable";
import * as Fs from "fs";
import * as Types from "@patternplate/types";

export type FsLike = typeof Fs;

export interface ObservableQueue<T> extends Observable<T[]> {
  queue: T[];
  stop(): void;
}

export interface ObservableWatcher extends Observable<QueueMessage> {
  watcher: chokidar.FSWatcher;
  stop(): void;
}

export type MsgQueue = ObservableQueue<QueueMessage>;

export type QueueMessage =
  | QueueStartMessage
  | QueueReadyMessage
  | QueueSerializedDoneMessage
  | QueueDoneMessage
  | QueueErrorMessage
  | QueueExceptionMessage
  | QueueShutDownMessage
  | QueueStopMessage
  | QueueHeartbeatMessage
  | QueueWatchMessage
  | QueueChangeMessage;

export interface QueueStartMessage {
  type: "start";
  target: Types.CompileTarget;
}

export interface QueueReadyMessage {
  type: "ready";
}

export interface QueueShutDownMessage {
  type: "shutdown";
  target: Types.CompileTarget;
}

export interface QueueSerializedDoneMessage {
  type: "worker-done";
  target: Types.CompileTarget;
  payload: { files: { [filename: string]: string  } }
}

export interface QueueDoneMessage {
  type: "done";
  target: Types.CompileTarget;
  payload: { fs: any }
}

export interface QueueErrorMessage {
  type: "error";
  target?: Types.CompileTarget;
  payload: any;
}

export interface QueueExceptionMessage {
  type: "exception";
  payload: {
    code: number;
    stdout: string;
    stderr: string;
  };
}

export interface QueueHeartbeatMessage {
  type: "heartbeat";
  target: Types.CompileTarget;
}

export interface QueueStopMessage {
  type: "stop";
  target: Types.CompileTarget;
}

export interface QueueWatchMessage {
  type: "watch";
  target: Types.CompileTarget;
}

export interface QueueChangeMessage {
  type: "change";
  payload: {
    file: string;
    contentType: Types.ContentType;
  };
}

export interface QeueErrorMessage {
  type: "error";
  payload: any;
}

export interface RouteOptions {
  cwd: string;
  config: Types.PatternplateConfig;
  queue: MsgQueue;
}

export interface Renderer {
  head: () => string;
  default: () => void;
  css?: () => string;
  html?: () => string;
  js?: () => string;
  render?(input: Renderer, ctx: { dirname: string }): HtmlContent;
}

export interface HtmlContent {
  head?: string;
  css?: string;
  before?: string;
  html?: string;
  after?: string;
  js?: string;
  script?: string;
}
