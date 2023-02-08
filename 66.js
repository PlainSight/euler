/*
Consider quadratic Diophantine equations of the form:

x^2 – Dy^2 = 1

For example, when D=13, the minimal solution in x is 649^2 – 13×180^2 = 1.

It can be assumed that there are no solutions in positive integers when D is square.

By finding minimal solutions in x for D = {2, 3, 5, 6, 7}, we obtain the following:

3^2 – 2×2^2 = 1
2^2 – 3×1^2 = 1
9^2 – 5×4^2 = 1
5^2 – 6×2^2 = 1
8^2 – 7×3^2 = 1

Hence, by considering minimal solutions in x for D ≤ 7, the largest x is obtained when D=5.

Find the value of D ≤ 1000 in minimal solutions of x for which the largest value of x is obtained.
*/


/*
d = 2
x = 3

x*x - d*y*y = 1

x*x - 1 / d = y*y


pfactions^2 - d*pfactors^2 = 1

1*d 4*d 9*d 16*d 25*d
-
1   4   9   16   25
=
1


*/

// function findGreatestPrimeFactor(x) {
//     for(var f = Math.ceil(Math.sqrt(x)); f > 1; f--) {
//         if (x % f == 0) {
//             var one = f;
//             var two = x/one;
//             return Math.max(one, two);
//         }
//     }
//     return x;
// }

var largestX = 0;
var bestD = 0;

for(var d = 2; d <= 1000; d++) {
    if (Math.sqrt(d) == Math.round(Math.sqrt(d))) {
        continue;
    }

ina: for(var y = 1; ; y++) {
        var difference = 1 + (d-1)*y*y;
        var newSquare = (y*y) + difference;
        var x = Math.sqrt(newSquare);
        if (x == Math.floor(x)) {
            console.log(d, x, y);

            if (x >= largestX) {
                largestX = x;
                bestD = d;
            }

            break ina;
        }
    }
}

console.log(bestD, largestX);