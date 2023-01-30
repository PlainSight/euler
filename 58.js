/*

Starting with 1 and spiralling anticlockwise in the following way, a square spiral with side length 7 is formed.

(37)36 35 34 33 32(31)
 38(17)16 15 14(13)30
 39 18 (5) 4 (3)12 29
 40 19  6  1  2 11 28
 41 20 (7) 8  9 10 27
 42 21 22 23 24 25 26
(43)44 45 46 47 48 49

It is interesting to note that the odd squares lie along the bottom right diagonal, but what is more interesting is that 8 out of the 13 numbers lying along both diagonals are prime; that is, a ratio of 8/13 ≈ 62%.

If one complete new layer is wrapped around the spiral above, a square spiral with side length 9 will be formed. If this process is continued, what is the side length of the square spiral for which the ratio of primes along both diagonals first falls below 10%?

*/

function isPrime(n) {
    if (n < 2 || (n != 2 && ((n & 1) == 0))) {
        return false;
    }
    var top = Math.floor(Math.sqrt(n));
    if (top % 2 == 0) {
        top++;
    }

    for(var i = 3; i <= top; i += 2) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

var pn = 1;
var pp = 0;

for(var sl = 3; ; sl+=2) {
    
    var diagonals = (sl*2) - 1;

    var countAtLayerBelow = (sl-2)*(sl-2);

    var topRight = countAtLayerBelow + sl - 1;
    var topLeft = countAtLayerBelow + 2*(sl - 1);
    var bottomLeft = countAtLayerBelow + 3*(sl - 1);
    var bottomRight = countAtLayerBelow + 4*(sl - 1);

    pn += 4;

    if (isPrime(topRight)) {
        pp++;
    }
    if (isPrime(topLeft)) {
        pp++;
    }
    if (isPrime(bottomLeft)) {
        pp++;
    }
    if (isPrime(bottomRight)) {
        pp++;
    }

    if (pp / pn < 0.1) {
        console.log(sl, pp, pn);
        return;
    }
}