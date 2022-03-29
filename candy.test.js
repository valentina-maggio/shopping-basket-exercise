const Candy = require('./candy.js');

describe('Candy', () => {
  it('returns the name of the candy', () => {
    const sut = new Candy('Mars', 4.99);
    expect(sut.getName()).toBe('Mars')
  });
  it('returns the name of the candy', () => {
    const sut = new Candy('Mars', 4.99);
    expect(sut.getPrice()).toBe(4.99)
  });
});