const assert = require("chai").assert;
const expect = require("chai").expect;
const Basket = require("../basket.js");
const Checkout = require("../checkout.js");
const Book = require("../book.js");

describe("checkout", function() {
  it("should return price of 0 when myBasket is empty", function() {
    let myBasket = new Basket();
    let myCheckout = new Checkout();
    let checkoutPrice = myCheckout.calculatePrice(myBasket);
    assert.equal(checkoutPrice, 0);
  });

  it("should return price of book when myBasket has one book", function() {
    let myBasket = new Basket();
    let myCheckout = new Checkout();
    let newBook = new Book();

    newBook.setPrice(4);
    myBasket.addBook(newBook);

    let checkoutPrice = myCheckout.calculatePrice(myBasket);

    assert.equal(checkoutPrice, 4);
  });
});
