const { calculateDifference } = require('../problems/p6');

test('Find the difference between the sum of the squares of a sequence of natural numbers and the square of the sum', () => {
    expect(calculateDifference(100)).toBe(25164150)
})