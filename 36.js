var sum = 0;

outer: for(var i = 1; i < 1000000; i++) {
    var c = (i+'').split('');

    for(var l = 0; l < c.length/2; l++) {
        if (c[l] != c[c.length-(1+l)]) {
            continue outer;
        }
    }

    c = i.toString(2).split('');

    for(var l = 0; l < c.length/2; l++) {
        if (c[l] != c[c.length-(1+l)]) {
            continue outer;
        }
    }

    sum += i;
}

console.log(sum);