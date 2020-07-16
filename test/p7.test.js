const { generatePrimeNumber } = require('../problems/p7');

test('Solution to problem 7 project euler', () => {
    expect(generatePrimeNumber(10001)).toBe(104743)
})