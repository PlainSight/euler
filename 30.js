var result = 0;

for(var i = 10; i < 5*9*9*9*9*9; i++) {
    var digits = (i+'').split('').map(n => parseInt(n));

    var powerSum = digits.map(n => n*n*n*n*n).reduce((a, c) => a + c, 0);

    if (powerSum == i) {
        result += i;
    }
}

console.log(result);