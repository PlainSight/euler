var count = 0;

var mem = [];

function factorial(x) {
    if (x == BigInt(0)) {
        return BigInt(1);
    }
    if (mem[x]) {
        return mem[x];
    }
    var res = x*factorial(x-BigInt(1));
    mem[x] = res;
    return res;
}

function combination(n, r) {
    return factorial(n) / (factorial(r)*factorial(n-r));
}

for(var n = BigInt(1); n <= 100; n++) {
    for(var r = BigInt(1); r < n; r++) {
        if (combination(n, r) > BigInt(1000000)) {
            count++;
        }
    }
}

console.log(count);