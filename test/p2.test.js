const { generateFibonacci } = require('../problems/p2');

test('Generates an array containing a Fibonacci sequence that has a maximum value that cannot be exceeded.', () => {
    expect(generateFibonacci(4000000)).toBe(4613732)
})