const Candy = require('./candy.js');

describe('Candy', () => {
  it('returns the name of the candy', () => {
    const sut = new Candy('Mars');
    expect(sut.getName()).toBe('Mars')
  });
});