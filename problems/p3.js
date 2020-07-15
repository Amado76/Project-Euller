/* 
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/

exports.largestPrimeFactor = (number) => {
    var primeFactor = [];
    loop1: for (i = 2; i <= number; i++) {
        var counter = 0;
        if ((i % 2 === 0) && (i !== 2)) {
            continue
        } else {
            loop2: for (j = 0; j <= i; j++) {
                if ((i % j !== 0)) {
                    continue loop2
                } else if ((i % j === 0) && (i !== j) && (counter === 2)) {
                    continue loop1
                } else if ((i % j === 0) && (i !== j) && (counter < 2)) {
                    counter++;
                    continue loop2;
                } else if ((i % j === 0) && (i == j) && (counter === 1)) {
                    if (number % j !== 0) {
                        continue loop1
                    } else {
                        primeFactor.push(j);
                        console.log(primeFactor);
                        if (primeFactor.reduce((previusValue, newValue) => previusValue * newValue, 1) === number) {
                            break loop1;
                        } else { continue loop1 }
                    }
                }
            }
        }
    };
    return primeFactor.pop();
}