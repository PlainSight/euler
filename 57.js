var cache = {};

function iterateFraction(depth) {
    if (depth == 0) {
        return [BigInt(1), BigInt(2)];
    }
    if (cache[depth]) {
        return cache[depth];
    }
    var next = iterateFraction(depth-1);
    var res = [
        next[1],
        next[0] + (next[1]*BigInt(2))
    ];
    cache[depth] = res;
    return res;
}

var count = 0;

for(var e = 0; e < 1000; e++) {
    var frac = iterateFraction(e);
    var num = frac[0] + frac[1];
    var den = frac[1];

    if ((num+'').length > (den+'').length) {
        count++;
    }
}

console.log(count);