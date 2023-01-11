/*
The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.
*/

var number = 0;

for(var t = 1; t <= 1000; t++) {
    var mul = t;
    for(var i = 1; i < t; i++) {
        mul = mul * t;
        mul = mul % 10000000000;
    }

    number += mul;
}

console.log(number);