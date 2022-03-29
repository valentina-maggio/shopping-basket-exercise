const ShoppingBasket = require('./shoppingbasket.js');
const Candy = require('./candy.js');

describe('ShoppingBasket', () => {
  it('adds a candy item to the shopping basket', () => {
    const sut = new ShoppingBasket();
    const candy = new Candy('Mars', 5);
    sut.addItem(candy)
    expect(sut.basket).toStrictEqual([['Mars', 5]])
  });
  it('returns the total price of the basket', () => {
    const sut = new ShoppingBasket();
    expect(sut.getTotalPrice()).toStrictEqual(0);
  })
  it('returns the total price of the basket', () => {
    const sut = new ShoppingBasket();
    const candy1 = new Candy('Mars', 5);
    const candy2= new Candy('Chrunchie', 15);
    sut.addItem(candy1)
    sut.addItem(candy2)
    expect(sut.getTotalPrice()).toStrictEqual(20);
  })
  it('returns the total price of the basket', () => {
    const sut = new ShoppingBasket();
    const candy1 = new Candy('Skittle', 3.99);
    const candy2= new Candy('Skittle', 3.99);
    sut.addItem(candy1)
    sut.addItem(candy2)
    expect(sut.getTotalPrice()).toStrictEqual(7.98);
  })
});
