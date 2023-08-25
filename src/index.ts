import { clusterApiUrl, Keypair, PublicKey } from "@solana/web3.js";
import { Wallet } from "@project-serum/anchor";
import dexterityTs from "@hxronetwork/dexterity-ts";
const dexterity = dexterityTs;
import bs58 from 'bs58'

//Setting up the RPC
const CLUSTER_NAME = "testnet";
const rpc = clusterApiUrl(CLUSTER_NAME);

const priv_key = "3SZgvGVoGfWL1B3Re1fFRepr4mjVdNkNfsjUCQ9byg8rgkMTwsP1fCe19JXAFb3dSfxtvmqMUvqDSV2DXkdswWK2"
const keypair = Keypair.fromSecretKey(
bs58.decode(priv_key)
);
const wallet = new Wallet(keypair);
