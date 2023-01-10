var str = '';

var n = 1;
while(str.length < 1000000) {
    str += (''+n);
    n++;
}

var ans = [1, 10, 100, 1000, 10000, 100000, 1000000].reduce((a, c) => {
    var v = str.charAt(c-1);
    return a * parseInt(v);
}, 1);

console.log(ans);