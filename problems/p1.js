/* 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000. 
*/



exports.generateArray = (numb) => {
    var arrayOfNumbers = [];
    for (i = 0; i < numb; i++) {
        arrayOfNumbers.push(i);
    };
    return arrayOfNumbers;
}



exports.generateMultiples = (array) => {
        var multiplesThreeAndFive = [];

        for (j = 0; j < array.length; j++) {

            var numb1 = array[j];
            if ((numb1 % 3 == 0) || (numb1 % 5 == 0)) {
                multiplesThreeAndFive.push(numb1);
            }
        };
        return multiplesThreeAndFive.reduce((previusValue, newValue) => previusValue + newValue, 0)


    }
    // console.log(generateMultiples(generateArray(10)));
    // module.exports = generateMultiples;
    // module.exports = generateArray;