const Candy = require('./candy.js');

class ShoppingBasket {
  constructor(basket = []) {
    this.basket = basket;
    this.discount = 0;
  }

  addItem(candy) {
    this.basket.push([candy.getName(), candy.getPrice()])
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
    let totalPrice = this.basket.map(item => item[1]).reduce((a, b) => a + b, 0);
    
    return totalPrice - this.discount;
  }
}

module.exports = ShoppingBasket;

