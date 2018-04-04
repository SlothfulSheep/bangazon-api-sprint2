const { postOneCustomer } = require("../app/controllers/customerCtrl");
const { postOne } = require("../app/models/Customer.js");
const { assert: { equal, deepEqual, isFunction } } = require("chai");
const { createTables } = require("../db/build_table");

// Model Tests

// describe("bangazonSprint2", () => {
//   beforeEach(done => {
//     createTables().then(() => {
//       done();
//     });
//   });
// });

describe("Post One", () => {
  it("should be a function", () => {
    isFunction(postOne);
  });

    beforeEach(done => {
      createTables().then(() => {
        setTimeout(done, 1000);
      });
    });

  it("should return an object", () => {
    let expected = {};
    postOne(expected).then(data => {
      deepEqual(data, expected);
    });
  });

  it("should return an object of customer data", () => {
    let expected = {
      first_name: "Jang",
      last_name: "Dao",
      street: "5 Lovers Lane",
      city: "Romancazania",
      state: "Denmark",
      zip: "56565",
      phone: "333-444-5555"
    };
    postOne(expected).then(data => {
      console.log("Custdata", data);
      deepEqual(data, expected);
    });
  });
});

// Controller Tests

// describe("add customer", () => {
//   it("should be a function", () => {
//     isFunction(postOneCustomer);
//   });
// });

// Pro Tip: Remember, we are testing features, not functions. Require whichever modules you need to test a feature
