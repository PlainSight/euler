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

var mostPrimes = 0;
var bestA = 0;
var bestB = 0;

for(var a = -999; a < 1000; a++) {
    for (var b = -1000; b <= 1000; b++) {
        function f(n) {
            return n*n + a*n + b;
        }

        var N = 0;

        while(isPrime(f(N))) {
            N++;
        }

        if (N > mostPrimes) {
            mostPrimes = N;
            bestA = a;
            bestB = b;
        }

        N = 0;

        while(isPrime(f(N))) {
            N--;
        }

        if (Math.abs(N) > mostPrimes) {
            mostPrimes = Math.abs(N);
            bestA = a;
            bestB = b;
        }
    }
}

console.log(bestA*bestB);