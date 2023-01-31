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

var LEN = 5;
var primes = [];
var startsAndEnds = {};

var checkedAThing = false;

function getCombinations(array) {
    var result = [];

    function fork(i, t) {
        if (t.length === 4) {
            result.push(t);
            return;
        }
        if (i === array.length) {
            return;
        }
        fork(i + 1, t.concat([array[i]]));
        fork(i + 1, t);
    }

    fork(0, []);
    return result;
}

for(var i = 2; true; i++) {
    if (isPrime(i)) {
        primes.push(i);
        //primeMap[i] = true;

        for(var qi = 0; qi < primes.length-1; qi++) {
            var p = i;
            var q = primes[qi];
    
            var pq = parseInt(p+''+q);
            var qp = parseInt(q+''+p);
            //if(primeMap[pq] && primeMap[qp]) {
            if(isPrime(pq) && isPrime(qp)) {
                startsAndEnds[p] = startsAndEnds[p] || {};
                startsAndEnds[p][q] = q;
    
                startsAndEnds[q] = startsAndEnds[q] || {};
                startsAndEnds[q][p] = p;

                var vals = Object.values(startsAndEnds[p]);
                if (vals.length < LEN-1) {
                    continue;
                }

                var checkCount = vals.reduce((a, c) => {
                    a[c] = 1;
                    return a;
                }, {});
                checkCount[p] = 1;

                vals.forEach(vv => {
                    checkCount[vv]++;
                    var sande = Object.values(startsAndEnds[vv]);
                    sande.forEach(sae => {
                        if (checkCount[sae]) {
                            checkCount[sae]++;
                        }
                    });
                });
                
                var goodVals = Object.entries(checkCount).filter(e => e[1] >= LEN).map(e => e[0]);

                if (goodVals.length < LEN-1) {
                    continue;
                }

                // permute vals and take 4
                var permutationsOfVals = getCombinations(goodVals);

                //console.log(p, goodVals);

                permutationsOfVals.forEach(pov => {
                    var mapCount = pov.reduce((a, c) => {
                        a[c] = 1;
                        return a;
                    }, {});
                    mapCount[p] = 1;

                    pov.forEach(pp => {
                        mapCount[pp]++;
                        var sande = Object.values(startsAndEnds[pp]);
                        sande.forEach(sae => {
                            if (mapCount[sae]) {
                                mapCount[sae]++;
                            }
                        });
                    })

                    var setWithEnough = Object.values(mapCount).filter(mc => mc >= LEN).length == LEN;
                    if (setWithEnough) {
                        var primeSet = Object.entries(mapCount).filter(e => e[1] >= LEN).map(e => parseInt(e[0]));
                        primeSet.forEach(vv => {
                            console.log(vv, Object.values(startsAndEnds[vv]).join(','));
                        })
                        console.log('result', primeSet, primeSet.reduce((a, c) => a + c, 0));
                        checkedAThing = true;
                    }
                });

                if (checkedAThing) {
                    return;
                }
            }
        }
    }
}

// for(var pi = 0; pi < primes.length; pi++) {
    
// }

//console.log(Object.values(startsAndEnds).filter(l => l.length >= 5).length);

//console.log(startsAndEnds);