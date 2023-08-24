import { clusterApiUrl, Keypair, PublicKey } from "@solana/web3.js";
import { Wallet } from "@project-serum/anchor";
import dexterityTs from "@hxronetwork/dexterity-ts";
const dexterity = dexterityTs;
import bs58 from 'bs58'

//Setting up the RPC
const CLUSTER_NAME = "testnet";
const rpc = clusterApiUrl(CLUSTER_NAME);

