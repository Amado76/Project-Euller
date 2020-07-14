/*2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
exports.findSmallestMultiple = (i) => {
    var i;
    while (true) {
        var divisible = true;
        for (j = 20; j >= 11; j--) {
            if (i % j !== 0) {
                divisible = false;
                break;
            }
        }
        if (divisible) {
            break;
        }
        i++
    }
    return i;
}