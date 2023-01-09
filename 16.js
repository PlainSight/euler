/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
*/

var mul = BigInt(1);

for(var i = 0; i < 1000; i++) {
    mul *= BigInt(2);
}

console.log((mul+'').split('').map(n => parseInt(n)));

var sum = (mul+'').split('').map(n => parseInt(n)).reduce((a, c) => a + c, 0);

console.log(sum);