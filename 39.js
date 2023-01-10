/*
If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

{20,48,52}, {24,45,51}, {30,40,50}

For which value of p ≤ 1000, is the number of solutions maximised?
*/

var bestP = 0;
var mostSolutions = 0;

for (var p = 12; p <= 1000; p++) {
    var solutions = 0;
    for(var h = 1; h <= (p/2); h++) {
        var h2 = h*h;
        for(var s1 = 1; s1 <= p/2; s1++) {
            var s2 = (p - h) - s1;
            if (s2 > 0 && (((s1*s1) + (s2*s2)) == h2)) {
                solutions++;
            }
        }
    }
    if (solutions > mostSolutions) {
        bestP = p;
        mostSolutions = solutions;
    }
}

console.log(bestP);