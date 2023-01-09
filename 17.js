/*
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/

var zeroes = {
    0: 0,
    1: 3,
    2: 3,
    3: 5,
    4: 4,
    5: 4,
    6: 3,
    7: 5,
    8: 5,
    9: 4
}

var teens = {
    10: 3,
    11: 6,
    12: 6,
    13: 8,
    14: 8,
    15: 7,
    16: 7,
    17: 9,
    18: 8,
    19: 8
}

var tens = {
    2: 6,
    3: 6,
    4: 5,
    5: 5,
    6: 5,
    7: 7,
    8: 6,
    9: 6
}

var and = 3;

var places = {
    100: 7,
    1000: 8
}

var sum = 0;

function lettersFor(i) {
    var count = 0;
    if (i == 1000) {
        count += (zeroes[1] + places[1000]);
    } else {
        if (i >= 100) {
            count += places[100];
            count += zeroes[Math.floor(i/100)];

            if (i % 100 != 0) {
                count += and;
            }
        }
        var remainder = i % 100;
        if (remainder < 20) {
            if (remainder < 10) {
                count += zeroes[remainder];
            } else {
                count += teens[remainder];
            }
        } else {
            var rr = Math.floor(remainder / 10);
            var r = remainder % 10;
            count += tens[rr];
            count += zeroes[r];
        }
    }
    return count;
}

for(var i = 1; i <= 1000; i++) {
    sum += lettersFor(i);
}


console.log(lettersFor(100));
console.log(sum);