const assert = require("assert");
const ganache = require("ganache-cli"); //local test ethereum network
const Web3 = require("web3"); //Web3 has capital W, as we are importing a constructor func/class, i.e. the constructor is used to create an instance of the web3 library; so as a convention, we make W uppercase.
const web3 = new Web3(ganache.provider()); //Here w in web3 is small as it is an instance of the Web3 constructor
const { interface, bytecode } = require("../compile");

let accounts;
let inbox;
beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  //Use one of those accounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi there!"] })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    assert.ok(inbox.options.address);
    //we are checking above if inbox.options.address is defined and is truthy
    // presence of an address where the contract is deployed ensures that the contract has been deployed to the network, so we check for the presence of an address
  });

  it("has a default message", async () => {
    const message = await inbox.methods.message().call();
    // 'methods' contains all public functions of our contract
    //above line is calling the message fn.
    // the () after message contain all arguments the message fn. might require
    // the () after call is used to customize the transaction that we are attempting to send out to the network
    assert.equal(message, "Hi there!");
  });

  it("can change the message", async () => {
    await inbox.methods.setMessage("Bye").send({
      from: accounts[0]
    });
    const message = await inbox.methods.message().call();
    assert.equal(message, "Bye");
    //send basically means send transaction
  });
});
