/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?
*/

exports.generatePrimeNumber = (maxPosition) => {
    var primes = [2, 3, 5, 7];
    var breakLoop = true;
    while (breakLoop) {
        loop1: for (i = 2; i < Infinity; i++) {
            var counter = 0;
            if ((i % 2 === 0) || (i % 3 === 0) || (i % 5 === 0) || (i % 7 === 0)) {
                continue
            } else {
                loop2: for (j = 1; j <= i; j++) {
                    if ((i % j !== 0)) {
                        continue loop2
                    } else if ((i % j === 0) && (i !== j) && (counter === 2)) {
                        continue loop1
                    } else if ((i % j === 0) && (i !== j) && (counter < 2)) {
                        counter++;
                        continue loop2;
                    } else if ((i % j === 0) && (i == j) && (counter === 1)) {
                        primes.push(j)
                        if (primes.length === maxPosition) {
                            breakLoop = false;
                            break loop1
                        } else { continue loop1 }

                    }

                }
            }
        }
    }
    return primes.pop()
}