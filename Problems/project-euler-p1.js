var numb = 10;
var arrayOfNumbers = [];
var multiplesThreeAndFive = [];

for (i = 0; i < numb; i++) {
    arrayOfNumbers.push(i);
};


for (j = 0; j <= arrayOfNumbers.length; j++) {
    var numb1 = arrayOfNumbers[j];
    if ((numb1 % 3 == 0) || (numb1 % 5 == 0)) {
        multiplesThreeAndFive.push(numb1);
    }
};

console.log(arrayOfNumbers);
console.log(multiplesThreeAndFive);
console.log(multiplesThreeAndFive.reduce((previousValue, newValue) => previousValue + newValue, 0));