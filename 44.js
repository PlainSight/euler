function isPent(p) {
    var p2 = p*2;

    //3n^2 - n - p2 == 0;

    var rightPart = Math.sqrt(1 + 12*p2);

    var root1 = (1 + rightPart) / 6;
    var root2 = (1 - rightPart) / 6;

    if (root1 == Math.floor(root1) && root1 > 0) {
        return true;
    }

    if (root2 == Math.floor(root2) && root2 > 0) {
        return true;
    }

    return false;
}

var answer = 0;

var pentNums = []

for(var nd = 1; answer == 0; nd++) {
    var num = (nd*((3*nd)-1))/2;

    pentNums.forEach(diff => {
        var ppn1 = num - diff;
        var ppn2 = num + diff;

        if (isPent(ppn1)) {
            var sum = ppn1 + num;
            if (isPent(sum)) {
                answer = diff;
            }
        }
        if (isPent(ppn2)) {
            var sum = ppn2 + num;
            if (isPent(sum)) {
                answer = diff;
            }
        }
    });

    pentNums.push(num);
}

console.log(answer);