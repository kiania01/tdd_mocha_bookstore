class Basket {
  constructor() {
    this.bookList = [];
  }

  getBooks() {
    return this.bookList;
  }

  addBook(book) {
    this.bookList.push(book);
  }
}

module.exports = Basket;
