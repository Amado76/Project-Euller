var fibonacciArray = [1, 2];
var i = 2;
while (fibonacciArray[fibonacciArray.length - 1] <= 4000000) {
    fibonacciArray.push(fibonacciArray[i - 2] + fibonacciArray[i - 1]);
    i++
}
fibonacciArray.pop();

console.log(
    fibonacciArray.filter(
        (newValue) => newValue % 2 == 0
    ).reduce((previusValue, newValue) => previusValue + newValue, 0))