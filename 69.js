function primeFactors(n) {
    var factors = {};

    var prime = true;

    var recipricols = [];

    if ((n & 1) == 0) {
        factors[2] = 2;
        prime = false;
        recipricols.push(n / 2);
    }

    var top = Math.floor(Math.sqrt(n));
    if ((top & 1) == 0) {
        top++;
    }
    if (top >= n) {
        top = n-1;
    }

    for(var i = 3; i <= top; i += 2) {
        if (n % i == 0) {
            if (Object.values(factors).every(f => i % f != 0)) {
                factors[i] = i;
                prime = false;
                recipricols.push(n / i);
            }
        }
    }

    if (n == 10) {
        console.log(factors, recipricols);
    }

    recipricols.forEach(r => {
        if (!factors[r]) {
            var recip = r;
            while(Object.values(factors).some(f => recip % f == 0)) {
                Object.values(factors).forEach(f => {
                    if (recip % f == 0) {
                        recip = recip / f;
                    }
                })
            }
            if (recip != 1) {
                factors[recip] = recip;
            }
        }
    })

    if (prime) {
        factors[n] = n;
    }

    return Object.values(factors);
}

var bestTotientRatio = 0;
var nWithBestRatio = 0;

function getCombinations(array) {

    function fork(i, t) {
        if (i === array.length) {
            result.push(t);
            return;
        }
        fork(i + 1, t.concat([array[i]]));
        fork(i + 1, t);
    }

    var result = [];
    fork(0, []);
    return result;
}

for(var i = 2; i <= 1000000; i++) {
    if (i % 10000 == 0) { 
        console.log('progress', i);
    }
    var factors = primeFactors(i);

    var combinations = getCombinations(factors);

    var sum = 0;

    combinations.forEach(c => {
        if (c.length != 0) {
            var mul = c.reduce((a, x) => a*x, 1);
            if (c.length % 2 == 0) {
                sum -= i / mul;
            } else {
                sum += i / mul;
            }
        }
    });

    var relativePrimes = i - sum;

    var ratio = i/relativePrimes;

    if (ratio >= bestTotientRatio) {
        bestTotientRatio = ratio;
        nWithBestRatio = i;
    }
}

console.log(nWithBestRatio, bestTotientRatio);