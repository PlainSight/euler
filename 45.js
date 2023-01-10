function isPent(p) {
    var p2 = p*2;

    // roots = (-b +- root(b^2 - 4ac)) / 2a
    
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

function isHex(h) {
    // roots = (-b +- root(b^2 - 4ac)) / 2a

    //2n^2 - n - h = 0

    var rightPart = Math.sqrt(1 + 8*h);

    var root1 = (1 + rightPart) / 4;
    var root2 = (1 - rightPart) / 4;

    if (root1 == Math.floor(root1) && root1 > 0) {
        return true;
    }

    if (root2 == Math.floor(root2) && root2 > 0) {
        return true;
    }

    return false;
}

for(var i = 286; true; i++) {
    var t = (i*(i+1)) / 2;
    if (isHex(t) && isPent(t)) {
        console.log(t);
        return;
    }
}

