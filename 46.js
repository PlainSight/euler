/*
It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.

9 = 7 + 2×1^2
15 = 7 + 2×2^2
21 = 3 + 2×3^2
25 = 7 + 2×3^2
27 = 19 + 2×2^2
33 = 31 + 2×1^2

It turns out that the conjecture was false.

What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?
*/

var knownPrimes = {};
var biggestPrime = 0;

function isPrime(n) {
    if (knownPrimes[n]) {
        return true;
    }

    if (n < biggestPrime) {
        return false;
    }

    if (n < 0 || (n != 2 && n & 1 == 0)) {
        return false;
    }

    var top = Math.floor(Math.sqrt(n));
    if ((top & 1) == 0) {
        top++;
    }

    for(var i = 3; i <= top; i += 2) {
        if (n % i == 0) {
            return false;
        }
    }

    for(var i = 3; i <= top; i += 2) {
        if (n % i == 0) {
            return false;
        }
    }

    knownPrimes[n] = true;
    biggestPrime = Math.max(biggestPrime, n);

    return true;
}


for(var i = 3; true; i += 2) {
    if (isPrime(i)) {
        continue;
    }

    var biggestSquare = Math.sqrt(i/2);

    var good = false;

    for (var s = 1; s < biggestSquare; s++) {
        var potentialPrime = i - (2*s*s);

        if (isPrime(potentialPrime)) {
            //console.log(i, potentialPrime + ' + 2 x ' + s + '^2');
            good = true;
            break;
        }
    }

    if (!good) {
        console.log(i);
        return;
    }
}