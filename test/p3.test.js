const { largestPrimeFactor } = require('../problems/p3');

test('Find the largest prime factor of a number', () => {

    expect(largestPrimeFactor(600851475143)).toBe(6857);
})