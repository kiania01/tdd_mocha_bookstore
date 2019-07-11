class Book {
  constructor() {
    this.price = Number;
    this.title = String;
    this.author = String;
  }

  getPrice() {
    return this.price;
  }

  setPrice(priceToSet) {
    this.price = priceToSet;
  }
}

module.exports = Book;
