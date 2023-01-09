var numerators = [];
var denominators = [];

for(var n = 10; n < 100; n++) {
    for(var d = n+1; d < 100; d++) {
        var denom = (d+'').split('');
        var numer = (n+'').split('');

        if (denom[1] == '0' || numer[1] == '0') {
            continue;
        }

        if (n == d) {
            continue;
        }

        if (denom[0] == numer[1] && (d * numer[0] == n * denom[1])) {
            numerators.push(n);
            denominators.push(d);
        }
    }
}

var numerator = numerators.reduce((a, c) => a * c, 1);

var denominator = denominators.reduce((a, c) => a * c, 1);

function gcd(a, b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
}

console.log(numerator, denominator, gcd(numerator, denominator), numerator / gcd(numerator, denominator), denominator / gcd(numerator, denominator));