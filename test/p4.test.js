const { generatePalindrome } = require('../problems/p4');


test('Find the largest Palindrome made from product of two 3-digit numbers ', () => {
    expect(generatePalindrome(999, 999)).toBe(906609)
})