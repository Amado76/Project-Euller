/* 
The sum of the squares of the first ten natural numbers is, 12+22+...+102=385
The square of the sum of the first ten natural numbers is, (1+2+...+10)2=552=3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025−385=2640.
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

exports.calculateDifference = (number) => {
    var newArray = [];
    for (i = 1; i <= number; i++) {
        newArray.push(i);
    }
    return Math.pow((newArray.reduce((previusValue, newValue, ) => previusValue + newValue, 0)), 2) -
        newArray.reduce((previusValue, newValue, ) => previusValue + Math.pow(newValue, 2), 0)
}