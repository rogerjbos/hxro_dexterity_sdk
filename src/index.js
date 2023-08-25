"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
const anchor_1 = require("@project-serum/anchor");
const dexterity_ts_1 = __importDefault(require("@hxronetwork/dexterity-ts"));
const dexterity = dexterity_ts_1.default;
const bs58_1 = __importDefault(require("bs58"));
//Setting up the RPC
const CLUSTER_NAME = "testnet";
const rpc = (0, web3_js_1.clusterApiUrl)(CLUSTER_NAME);
const priv_key = "3SZgvGVoGfWL1B3Re1fFRepr4mjVdNkNfsjUCQ9byg8rgkMTwsP1fCe19JXAFb3dSfxtvmqMUvqDSV2DXkdswWK2";
const keypair = web3_js_1.Keypair.fromSecretKey(bs58_1.default.decode(priv_key));
const wallet = new anchor_1.Wallet(keypair);
// const CreateTRG = async() => {
//     // get the latest manifest
//     const manifest = await dexterity.getManifest(rpc, false, wallet);
// }
// CreateTRG()
// // BTC-USD Market-Product-Group PubKey
// const MPG = "DDxNzq3A4qKJxnK2PFYeXE1SgGXCR5baaDBhpfLn3LRS"
// const mpgPubkey = new PublicKey(MPG);
// //Create our TRG for the BTC-USD MPG
// const trgPubkey = await manifest.createTrg(mpgPubkey);
// console.log("success! trg pubkey:", trgPubkey.toBase58());
const CreateTRG = () => __awaiter(void 0, void 0, void 0, function* () {
    const manifest = yield dexterity.getManifest(rpc, false, wallet);
    const MPG = "DDxNzq3A4qKJxnK2PFYeXE1SgGXCR5baaDBhpfLn3LRS"; // BTC-USD Market-Product-Group PubKey for Testnet
    const mpgPubkey = new web3_js_1.PublicKey(MPG);
    const trgPubkey = yield manifest.createTrg(mpgPubkey);
    console.log("success! trg pubkey:", trgPubkey);
});
CreateTRG();
