const { generateArray } = require('../problems/p1');
const { generateMultiples } = require('../problems/p1');


test('Generates an array off all natural numbers below 10', () => {
    expect(generateArray(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

});

test(' Return the sum of all multiples of 3 or 5 below 10', () => {
    console.log(generateArray(10));
    expect(generateMultiples(generateArray(10))).toEqual(23)
});