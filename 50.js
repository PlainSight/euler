/*
The prime 41, can be written as the sum of six consecutive primes:

41 = 2 + 3 + 5 + 7 + 11 + 13
This is the longest sum of consecutive primes that adds to a prime below one-hundred.

The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.

Which prime, below one-million, can be written as the sum of the most consecutive primes?
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

var primesLessThanMillion = [];
var primeCheck = {};

for(var i = 2; i < 1000000; i++) {
    if(isPrime(i)) {
        primesLessThanMillion.push(i);
        primeCheck[i] = true;
    }
}

var answer = 0;
var longest = 0;

var pllml = primesLessThanMillion.length;

for(var o = 0; o < pllml; o++) {
    var sum = 0;
    var i = 0;
    while(((sum + primesLessThanMillion[o+i]) < 1000000) && o+i < pllml) {
        sum = sum + primesLessThanMillion[o+i];
        i++;
    }
    if (primeCheck[sum]) {
        if (i > longest) {
            answer = sum;
            longest = i;
        }
    }
}

console.log(answer);