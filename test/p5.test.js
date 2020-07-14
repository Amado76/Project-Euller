const { findSmallestMultiple } = require('../problems/p5');


test('Find the smallest multiple of the number from 1 to 20', () => {
    expect(findSmallestMultiple(20)).toStrictEqual(232792560)
})