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

    return Object.values(factors).sort((a, b) => b - a);
}

var distinctFactorSets = [];

/*
factors
eg. 72 == {2: 3, 3: 2}
*/

function checkFactors(factors) {
    for(var d = 0; d < distinctFactorSets.length; d++) {
        var dfs = distinctFactorSets[d];
        var entries = Object.entries(factors);
        for(var ei = 0; ei < entries.length; ei++) {
            var e = entries[ei];
            var v = e[0];
            var c = e[1];
            var inSet = 0
            if (dfs[v] >= c) {

            }
        }
    }
}


for(var d = 2; d <= 8; d++) {
    var currentNode = root;
    var reducable = d;

    var factors = primeFactors(d);

    console.log(factors);

    var extendedFactors = [];

    do {
        var top = factors.pop();
        while(reducable % top == 0) {
            extendedFactors.push(top);
            //currentNode = getNode(currentNode, top);
            reducable /= top;
        }
    } while(factors.length > 0);

    console.log(extendedFactors);
}
