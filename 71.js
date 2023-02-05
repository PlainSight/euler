var gcd = function(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}

var targetNumer = 3;
var targetDenom = 7;

var bestNumer = 1;
var bestDenom = 10;

for(var d = 1; d <= 1000000; d++) {
    // find closest faction with a specific d

    var ns = Math.floor((d * targetNumer) / targetDenom);

    var div = gcd(ns, d);

    var denom = d / div;
    var numer = ns / div;

    // check is less than target
    var targetCompareNumer = denom * targetNumer;
    var currentCompareNumer = numer * targetDenom;

    if (currentCompareNumer >= targetCompareNumer) {
        continue;
    }
    
    // check is better than best
    var bestCompareNumer = denom * bestNumer;
    currentCompareNumer = numer * bestDenom;

    if (currentCompareNumer > bestCompareNumer) {
        bestNumer = numer;
        bestDenom = denom;
    }
}

console.log(bestNumer, bestDenom);