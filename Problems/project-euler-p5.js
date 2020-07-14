var i = 20
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

console.log(i);