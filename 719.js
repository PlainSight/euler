function isSNumber(n, r) {
    var sqrtN = r;

    var digits = ('' + n).split('').map(x => parseInt(x));

    if (digits.length < 2) {
        return false;
    }

    //console.log(digits);

    var permutations = Math.pow(2, digits.length - 1);

    for(var p = 0; p < permutations; p++) {
        var bitset = p;
        var sum = 0;

        var acc = digits[0];

        for(var pi = 1; pi < digits.length; pi++) {
            if (bitset & 1 == 1) {
                sum += acc;
                acc = digits[pi];
            } else {
                acc *= 10;
                acc += digits[pi];
            }

            bitset = bitset >> 1;
        }

        sum += acc;

        //console.log(p, sum);
        
        if (sum == sqrtN) {
            return true;
        }
    }

    return false;
}

var sumOfSNumbers = 0;

for(var i = 0; i <= 1000000; i++) {
    var n = i*i;
    if (isSNumber(n, i)) {
        sumOfSNumbers += n;
    }
}

console.log(sumOfSNumbers);