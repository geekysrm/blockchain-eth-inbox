const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "gossip resist harsh melt label orbit suspect fiction elite reward legal viable",
  "https://rinkeby.infura.io/v3/c251e63904af4ff4abdd06ca2cc0ee13"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account", accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: "0x" + bytecode,
      arguments: ["Hi there!"]
    })
    .send({ from: accounts[0], gas: "1000000" });
  console.log("Contract deployed to", result.options.address);
};

deploy();
