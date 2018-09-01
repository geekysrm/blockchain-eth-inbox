const assert = require("assert");
const ganache = require("ganache-cli"); //local test ethereum network
const Web3 = require("web3"); //Web3 has capital W, as we are importing a constructor func/class, i.e. the constructor is used to create an instance of the web3 library; so as a convention, we make W uppercase.
const web3 = new Web3(ganache.provider()); //Here w in web3 is small as it is an instance of the Web3 constructor

class Car {
  park() {
    return "stopped";
  }
  drive() {
    return "vroom";
  }
}

// any code we place inside the argument fn. of beforeEach will be executed before each it statement inside our code
let car;
beforeEach(() => {
  car = new Car();
});

describe("Car", () => {
  it("can park", () => {
    assert.equal(car.park(), "stopped");
  });

  it("can drive", () => {
    assert.equal(car.drive(), "vroom");
  });
});
