var set = {};

function pow(x, n) {
    var xx = BigInt(x);

    for(var i = 0; i < n-1; i++) {
        xx *= BigInt(x);
    }

    return xx;
}

for(var a = 2; a <= 100; a++) {
    for(var b = 2; b <= 100; b++) {
        var val = pow(a, b);
        set[val+''] = val;
    }
}

console.log(Object.keys(set).length);