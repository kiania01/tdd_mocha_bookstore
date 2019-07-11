const assert = require("chai").assert;
const expect = require("chai").expect;
const Basket = require("../basket.js");
const Book = require("../book.js");

describe("basket", function() {
  let myBasket;
  let newBook;

  beforeEach(function() {
    myBasket = new Basket();
    newBook = new Book("Wuthering Heights", "Emily Bronte");
    newBook2 = new Book("Harry Potter", "JK Rowling");
  });

  it("should contain 0 books when initialised", function() {
    const books = myBasket.getBooks();
    assert.equal(books.length, 0);
  });

  it("should contain given book AND book in myBasket should be 1", function() {
    myBasket.addBook(newBook);

    const books = myBasket.getBooks();
    expect(books).contains(newBook);
    assert.equal(books.length, 1);
  });

  it("should contain given books AND books in myBasket should be 2", function() {
    myBasket.addBook(newBook);
    myBasket.addBook(newBook2);

    const books = myBasket.getBooks();
    expect(books).contains(newBook, newBook2);
  });
});
