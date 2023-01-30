/*

The primes 3, 7, 109, and 673, are quite remarkable. By taking any two primes and concatenating them in any order the result will always be prime. For example, taking 7 and 109, both 7109 and 1097 are prime. The sum of these four primes, 792, represents the lowest sum for a set of four primes with this property.

Find the lowest sum for a set of five primes for which any two primes concatenate to produce another prime.

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

var primes = [];
var primeMap = {};

for(var i = 2; i < 100000; i++) {
    if (isPrime(i)) {
        primes.push(i);
        primeMap[i] = true;
    }
}

var startsAndEnds = {};

var stringsByCount = {};

primes.forEach(p => {
    primes.forEach(q => {
        if (p != q) {
            //ends
            var pq = p+''+q;
            var qp = q+''+p;
            if(primeMap[pq] && primeMap[qp]) {
                startsAndEnds[p] = startsAndEnds[p] || { elements: [p], str: ''};
                startsAndEnds[p].elements.push(q);
                startsAndEnds[p].str = startsAndEnds[p].elements.sort().join(',');

                startsAndEnds[q] = startsAndEnds[q] || { elements: [q], str: '' };
                startsAndEnds[q].elements.push(p);
                startsAndEnds[q].str = startsAndEnds[q].elements.sort().join(',');
            }
        }
    })
})

console.log(primes);