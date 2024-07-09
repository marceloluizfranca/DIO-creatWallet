const bip39 = require('bip39');
const bip32 = require('bip32');
const bitcoin = require('bitcoinjs-lib');


const network = bitcoin.networks.testnet;

const path = "m/49'/1'/0'/0";

let mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);
let root = bip32.fromSeed(seed, network);

let account = root.derivePath(path);
let node = account.derive(0);
let btcAddress = bitcoin.payments.p2wpkh({ pubkey: node.publicKey, network }).address;

console.log("Carteira criada com sucesso!");
console.log("Endereço: " + btcAddress); 
console.log("Chave privada: " + node.toWIF());
console.log('Seed: ' + mnemonic);