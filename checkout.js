const Book = require("./book.js");

class Checkout {
  constructor() {
    this.book = new Book();
  }

  calculatePrice(basket) {
    let price = 0;
    let total = 0;

    var bookList = basket.getBooks();
    var book;

    // for every book in my array basket
    for (book = 0; book < bookList.length; ++book) {
      // get the price of each book
      price = this.book.getPrice();
      // and add it to the total
      total += price;
    }

    return total;
  }
}

module.exports = Checkout;
