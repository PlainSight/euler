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

var primes = [];

outer: for(var i = 2; i < 1000000; i++) {
    if (isPrime(i)) {
        var si = (i+'').split('');

        var len = si.length;

        for(var l = 0; l < len; l++) {
            var ac = [];
            for(var j = 0; j < len; j++) {
                ac.push(si[(l+j)%len]);
            }
            var rotatedPrime = parseInt(ac.join(''));
            if (!isPrime(rotatedPrime)) {
                continue outer;
            }
        }

        console.log(i);
        primes.push(i);
    }
}

console.log(primes.length);