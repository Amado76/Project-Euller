/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

function isPalindromic(x) {
    var inverse = parseInt(x.toString().split('').reverse().join(''));
    if (inverse === x)
        return true;
    else
        return false;
}

exports.generatePalindrome = (x, y) => {
    var largestPalindrome = 0;
    for (x; x >= 100; x--) {
        for (y = x; y >= 100; y--) {
            var product = x * y;
            if (isPalindromic(product)) {
                if (largestPalindrome < product) {
                    largestPalindrome = product
                }
            }
        }
    }
    return largestPalindrome;
}