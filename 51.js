/*
By replacing the 1st digit of the 2-digit number *3, it turns out that six of the nine possible values: 13, 23, 43, 53, 73, and 83, are all prime.

By replacing the 3rd and 4th digits of 56**3 with the same digit, this 5-digit number is the first example having seven primes among the ten generated numbers, yielding the family: 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Consequently 56003, being the first member of this family, is the smallest prime with this property.

Find the smallest prime which, by replacing part of the number (not necessarily adjacent digits) with the same digit, is part of an eight prime value family.
*/

function isPrime(n) {
    if (n < 2 || (n != 2 && ((n & 1) == 0))) {
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

var replaceChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var finished = false;

for(var i = 11; !finished; i++) {
    if (!isPrime(i)) {
        continue;
    }

    var len = Math.pow(2, 1+Math.floor(Math.log(i) / Math.log(10)));

    var numstr = (i+'').split('');

    var variants = [];

    for (var n = 1; n <= len; n++) {
        var j = n;
        var variant = '';

        var checks = 0;

        for(var ni = 0; ni < numstr.length; ni++) {
            var check = (j & 1) == 1;
            if (check) {
                checks++;
            }
            variant = variant + (check ? 'X' : numstr[ni]);
            j = Math.floor(j / 2);
        }
        
        if (checks > 0) {
            variants.push(variant);
        }
    }
    
    variants.forEach(v => {
        var newNums = replaceChars.map(x => {
            return parseInt(v.replace(/X/g, x));
        });

        var primes = newNums.filter(n => {
            return ((n+'').length == numstr.length) && isPrime(n);
        });

        if (primes.length >= 8) {
            finished = true;
            console.log(primes[0]);
        }
    });
}