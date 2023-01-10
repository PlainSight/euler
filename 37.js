/*
The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
*/

function isPrime(n) {
    if (n < 0) {
        return false;
    }
    var top = Math.floor(Math.sqrt(n));

    for(var i = top; i > 1; i--) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

var left = 11;

var set = {};

var starts = ['2', '3', '5', '7'];
var ends = ['3', '7'];

var allowedMiddle = ['1', '3', '7', '9'];

var currentSetSize = 4;
var currentSetProgress = 0;
var currentSetDigits = 1;

for(var i = -1; left > 0; i++) {
    if (currentSetProgress == currentSetSize) {
        currentSetSize *= 4;
        currentSetDigits += 1;
        currentSetProgress = 0;
    }

    var str = '';

    if (i >= 0) {
        var j = currentSetProgress;

        for(var d = 0; d < currentSetDigits; d++) {
            str += allowedMiddle[Math.floor(j / Math.pow(4, d)) % 4];
        }
    
        currentSetProgress++;
    }
    
    
    starts.forEach(st => {
        ends.forEach(en => {
            var fs = st + str + en;
            var num = parseInt(st + str + en);
            var prime = true;
            if (isPrime(num)) {
            fir:    for(var s = 1; s < fs.length; s++) {
                    var n = fs.substring(s);
                    if(!isPrime(parseInt(n))) {
                        prime = false;
                        break fir;
                    }
                }
            sec:    for(var s = fs.length-1; s > 0; s--) {
                    var n = fs.substring(0, s);
                    if (!isPrime(parseInt(n))) {
                        prime = false;
                        break sec;
                    }
                }

                if (prime) {
                    set[num] = num;
                    left = 11 - Object.values(set).length;
                }
            }
        });
    });
}

console.log(Object.values(set).reduce((a, c) => a+c, 0));

// must not be composed of 0s and 1s, can start with 2 or 5 but not end with them

/*
23
53
73
*/