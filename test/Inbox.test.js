const assert = require("assert");
const ganache = require("ganache-cli"); //local test ethereum network
const Web3 = require("web3"); //Web3 has capital W, as we are importing a constructor func/class, i.e. the constructor is used to create an instance of the web3 library; so as a convention, we make W uppercase.
const web3 = new Web3(ganache.provider()); //Here w in web3 is small as it is an instance of the Web3 constructor

let accounts;
beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  //Use one of those accounts to deploy the contract
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    console.log(accounts);
  });
});
