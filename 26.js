/*
A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

1/2	= 	0.5
1/3	= 	0.(3)
1/4	= 	0.25
1/5	= 	0.2
1/6	= 	0.1(6)
1/7	= 	0.(142857)
1/8	= 	0.125
1/9	= 	0.(1)
1/10	= 	0.1
Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.
*/

var longestRecurringCycle = 0;
var longestRecurringCycleDivisor = 0;

for(var d = 2; d < 1000; d++) {
    var n = d;
    while(true) {
        if (n % 2 == 0) {
            n = n / 2;
        } else {
            if (n % 5 == 0) {
                n = n / 5;
            } else {
                break;
            }
        }
    }
    if (n != 1) {
        // we know the decimal repeats

        var index = 0;

        // we know that we repeat at d - 1 at most

        var currentNumerator = 1;

        var digits = [];

        for(var i = 0; i < d*2; i++) {
            currentNumerator *= 10;
            digits.push(Math.floor(currentNumerator/d));
            currentNumerator = currentNumerator % d;
        }

        var longestPeriod = 0;

outer:  for(var p = 1; p < d; p++) {
            for(var i = digits.length-1; i > digits.length/2; i--) {
                if (digits[i] != digits[i-p]) {
                    continue outer;
                }
            }
            longestPeriod = p;
            break outer;
        }

        if (longestPeriod > longestRecurringCycle) {
            longestRecurringCycle = longestPeriod;
            longestRecurringCycleDivisor = d;
        }

        console.log(d, longestPeriod);
    }
}

console.log(longestRecurringCycle);