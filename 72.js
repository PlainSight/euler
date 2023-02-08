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

// var gcd = function(a, b) {
//     if (!b) {
//         return a;
//     }
//     return gcd(b, a % b);
// }

var root = {};

function getNode(current, n) {
    current[n] = current[n] || {};
    return current[n];
}

function walkTree(currentKey, node, multiplier) {
    var keys = Object.keys(node);
    var value = parseInt(currentKey);
    if (keys.length == 0) {
        var res = (multiplier*value) - 1;
        console.log('leaf ' + currentKey + ': ' + res);
        return res;
    } else {
        var sum = 0;
        keys.forEach(k => {
            var newMultiplier = currentKey == k ? (multiplier * value) : multiplier;
            sum += (walkTree(k, node[k], newMultiplier))
        });
        return sum;
    }
}

for(var d = 1000000; d >= 999998; d--) {
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

//console.log(JSON.stringify(root));
//console.log(walkTree(1, root, 1));

/*
1/8, 1/4, 3/8, 1/2, 5/8, 3/4, 7/8
 
1/6, 1/3,
1/7, 
1/5, 
2/7, 
2/5, 
3/7, 
 
4/7, 
3/5, 
2/3, 
5/7, 
4/5, 
5/6,
6/7, 

*/