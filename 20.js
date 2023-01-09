/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/

function fact(n) {
    var i = n;
    var m = BigInt(1);
    while(i > 0) {
        m *= i;
        i--;
    }
    return m;
}

console.log((fact(BigInt(100))+'').split('').map(n => parseInt(n)).reduce((a, c) => a + c, 0));