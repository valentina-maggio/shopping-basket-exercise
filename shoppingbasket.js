const Candy = require('./candy.js');

class ShoppingBasket {
  constructor(basket = []) {
    this.basket = basket;
  }

  addItem(candy) {
    this.basket.push([candy.getName(), candy.getPrice()])
  }

  getTotalPrice() {
    return this.basket.map(item => item[1]).reduce((a, b) => a + b, 0);
  }
}

module.exports = ShoppingBasket;