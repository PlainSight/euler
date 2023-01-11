/*
The first two consecutive numbers to have two distinct prime factors are:

14 = 2 × 7
15 = 3 × 5

The first three consecutive numbers to have three distinct prime factors are:

644 = 2² × 7 × 23
645 = 3 × 5 × 43
646 = 2 × 17 × 19.

Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?
*/

function primeFactors(n) {
    var factors = {};

    if ((n & 1) == 0) {
        factors[2] = 2;
    }

    var top = Math.floor(n/2);
    if ((top & 1) == 0) {
        top++;
    }

    for(var i = 3; i <= top; i += 2) {
        if (n % i == 0) {
            if (Object.values(factors).every(f => i % f != 0)) {
                factors[i] = i;
            }
        }
    }
    return Object.values(factors).length;
}

var n = 1;
var ringIndex = 0;
var ring = [0, 0, 0, 0];

while (true) {
    ring[ringIndex] = primeFactors(n);

    if (ring[0] == 4 && ring[1] == 4 && ring[2] == 4 && ring[3] == 4) {
        console.log(n-3);
        return;
    }

    ringIndex = (ringIndex+1) % 4;
    n++;
}