/*
The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.

There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.

What 12-digit number do you form by concatenating the three terms in this sequence?
*/

function isPrime(n) {
    if (n < 0 || (n != 2 && ((n & 1) == 0))) {
        return false;
    }
    var top = Math.floor(Math.sqrt(n));
    if (top % 2 == 0) {
        top++;
    }

    for(var i = 3; i <= top; i += 2) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

var fourDigitPrimes = [];
var isAPrime = {};

for(var i = 1000; i <= 9999; i++) {
    if(isPrime(i)) {
        fourDigitPrimes.push(i);
        isAPrime[i] = true;
    }
}

var sequences = [];

for(var stride = 2; stride < 3333; stride++) {
    fourDigitPrimes.forEach(d => {
        var ds = (d+'').split('').reduce((a, c) => {
            a[c] = (a[c] || 0) + 1;
            return a;
        }, {});
        var nn1s = ((d+stride)+'').split('').reduce((a, c) => {
            a[c] = (a[c] || 0) + 1;
            return a;
        }, {});
        var nn2s = ((d+stride+stride)+'').split('').reduce((a, c) => {
            a[c] = (a[c] || 0) + 1;
            return a;
        }, {});

        var good = Object.entries(ds).every(d => {
            return d[1] == nn1s[d[0]] && d[1] == nn2s[d[0]];
        });

        if (!good) {
            return;
        }

        var np1 = isAPrime[d+stride];
        var np2 = isAPrime[d+stride+stride];
        if (np1 && np2) {
            sequences.push([d, d+stride, d+stride+stride]);
        }
    })
}

console.log(sequences.map(s => s.join('')));