/*
The 5-digit number, 16807=7^5, is also a fifth power. Similarly, the 9-digit number, 134217728=8^9, is a ninth power.

How many n-digit positive integers exist which are also an nth power?
*/

// what is the limit? 
/*
len(10^10) == 11
len(9^10) == 9 
Is 10 the limit? 
No 9^12 = 282429536481

len(10^n) == n+1

solve
0.9^n == 0.1

n*log(0.9) == log(0.1)

n*-0.04575749056 == -1
n == 21.85
max n 22

*/

var count = 0;

for(var i = 1; i <= 22; i++){
    for(var j = 1; j <= 9; j++) {
        var pow = Math.pow(j, i);
        var str = ''+pow;
        if (str.length == i) {
            count++;
        }
    }
}

console.log(count);