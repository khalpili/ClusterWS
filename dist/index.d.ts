// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../../../https

import * as HTTPS from 'https';

export default class ClusterWS {
    constructor(configurations: Configurations);
}

export type Message = any;
export type Listener = (...args: any[]) => void;
export type WorkerFunction = () => void;
export type HorizontalScaleOptions = {
    key?: string;
    serverId?: string;
    brokersUrls?: string[];
    masterOptions?: {
        port: number;
        tlsOptions?: HTTPS.ServerOptions;
    };
};
export type Configurations = {
    worker: WorkerFunction;
    port?: number;
    host?: string;
    workers?: number;
    brokers?: number;
    useBinary?: boolean;
    brokersPorts?: number[];
    tlsOptions?: HTTPS.ServerOptions;
    pingInterval?: number;
    restartWorkerOnFail?: boolean;
    horizontalScaleOptions?: HorizontalScaleOptions;
    encodeDecodeEngine?: EncodeDecodeEngine;
};
export type Options = {
    worker: WorkerFunction;
    port: number;
    host: string | null;
    workers: number;
    brokers: number;
    useBinary: boolean;
    brokersPorts: number[];
    tlsOptions: HTTPS.ServerOptions | null;
    pingInterval: number;
    restartWorkerOnFail: boolean;
    horizontalScaleOptions: HorizontalScaleOptions | null;
    encodeDecodeEngine: EncodeDecodeEngine | null;
};
export type EncodeDecodeEngine = {
    encode: (message: Message) => Message;
    decode: (message: Message) => Message;
};

