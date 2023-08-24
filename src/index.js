"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
const dexterity_ts_1 = __importDefault(require("@hxronetwork/dexterity-ts"));
const dexterity = dexterity_ts_1.default;
//Setting up the RPC
const CLUSTER_NAME = "testnet";
const rpc = (0, web3_js_1.clusterApiUrl)(CLUSTER_NAME);
