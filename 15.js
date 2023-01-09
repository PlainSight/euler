/* 
    2^20 + 2^19 ... 2^2 + 2^1
*/

function fact(n) {
    var i = n;
    var m = 1;
    while(i > 0) {
        m *= i;
        i--;
    }
    return m;
}

console.log(fact(40)/(fact(20)*fact(20)));