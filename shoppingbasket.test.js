const ShoppingBasket = require('./shoppingbasket.js');

describe('ShoppingBasket', () => {

  const candy1 = { getPrice: () => (5), getName: () => 'Mars' };
  const candy2 = { getPrice: () => (15), getName: () => 'Crunchie' };

  it('adds a candy item to the shopping basket', () => {
    const sut = new ShoppingBasket();
    sut.addItem(candy1)
    expect(sut.basket).toStrictEqual([['Mars', 5]])
  });
  it('returns 0 as the total price of the basket if not items are added', () => {
    const sut = new ShoppingBasket();
    expect(sut.getTotalPrice()).toStrictEqual(0);
  });
  it('returns the total price of the basket', () => {
    const sut = new ShoppingBasket();
    sut.addItem(candy1)
    sut.addItem(candy2)
    expect(sut.getTotalPrice()).toStrictEqual(20);
  });
  it('returns the total price of the basket', () => {
    const sut = new ShoppingBasket();
    sut.addItem(candy1)
    sut.addItem(candy2)
    expect(sut.getTotalPrice()).toStrictEqual(20);
  })
  it('returns the total price after applying discount', () => {
    const sut = new ShoppingBasket();
    sut.addItem(candy1)
    sut.addItem(candy2)
    sut.applyDiscount(5)
    expect(sut.getTotalPrice()).toStrictEqual(15);
  })
});



