

function fractionNumber(n) {
    switch (n) {
        case 0:
            return BigInt(2);
        case 1:
            return BigInt(1);
        case 2:
            return BigInt(2);
        default:
            var dx = (n - 3) % 3;
            var dd = (n+1) / 3;
            if (dx < 2) {
                return BigInt(1);
            } else {
                return BigInt(2*dd)
            }
    }
}

var depth = 99;

function recur(level) {
    if (level == depth) {
        if (level == 0) {
            return {
                n: fractionNumber(level),
                d: BigInt(1)
            }
        } else {
            return {
                n: BigInt(1),
                d: fractionNumber(level)
            }
        }
    } else {
        var child = recur(level+1);
        if (level == 0) {
            return {
                n: (fractionNumber(level) * child.d) + child.n,
                d: child.d
            }
        } else {
            return {
                n: child.d,
                d: (fractionNumber(level) * child.d) + child.n
            }
        }
    }
}

var res = recur(0);

console.log((''+res.n).split('').map(n => parseInt(n)).reduce((a, c) => a + c, 0));