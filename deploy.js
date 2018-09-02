const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "gossip resist harsh melt label orbit suspect fiction elite reward legal viable",
  "https://rinkeby.infura.io/v3/c251e63904af4ff4abdd06ca2cc0ee13"
);
const web3 = new Web3(provider);
