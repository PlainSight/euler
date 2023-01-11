/*
It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.
*/

function digits(n) {
    return (n+'').split('').reduce((a, c) => {
        a[parseInt(c)]++;
        return a;
    }, [0,0,0,0,0,0,0,0,0,0]).join(',');
}

for(var i = 1; true; i++) {
    var vals = [2, 3, 4, 5].map(n => digits(i*n));

    if (vals.every(v => v == vals[0])) {
        console.log(i);
        return;
    }
}