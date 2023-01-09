var largestNumber = (9*8*7*6*5*4*3*2)*7; // ?? probably a way smaller bound

function fact(n) {
    if(n == 0) {
        return 1;
    }
    return n*fact(n-1);
}

function sumFact(n) {
    return (n+'').split('').map(x => fact(x)).reduce((a, c) => a + c, 0);
}

var superSum = 0;

for(var i = 4; i <= largestNumber; i++) {
    if (i == sumFact(i)) {
        superSum += i;
    }
}

console.log(superSum);