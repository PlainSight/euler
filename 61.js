var types = [
    [],
    [],
    [],
    [],
    [],
    []
];

for(var i = 0;; i++) {
    var n = i;
    var triangle = n * (n+1) / 2;
    var square = n*n;
    var pentagonal = n * (3*n - 1) / 2;
    var hexagonal = n *(2*n - 1);
    var heptagonal = n * (5 * n - 3) / 2;
    var octagonal = n * (3 * n - 2);

    var setAny = false;
    
    if (triangle < 10000) {
        setAny = true;
        if (triangle >= 1000) {
            types[0].push(''+triangle);
        }
    }
    if (square < 10000) {
        setAny = true;
        if (square >= 1000) {
            types[1].push(''+square);
        }
    }
    if (pentagonal < 10000) {
        setAny = true;
        if (pentagonal >= 1000) {
            types[2].push(''+pentagonal);
        }
    }
    if (hexagonal < 10000) {
        setAny = true;
        if (hexagonal >= 1000) {
            types[3].push(''+hexagonal);
        }
    }
    if (heptagonal < 10000) {
        setAny = true;
        if (heptagonal >= 1000) {
            types[4].push(''+heptagonal);
        }
    }
    if (octagonal < 10000) {
        setAny = true;
        if (octagonal >= 1000) {
            types[5].push(''+octagonal);
        }
    }

    if (!setAny) {
        break;
    }
}

var starts = [];
var ends = [];
types.forEach(t => {
    t.forEach(tt => {
        var start = tt.substring(0, 2);
        var end = tt.substring(2);
        console.log(tt, start, end);
        starts.push(start);
        ends.push(end);
    })
})

console.log(types[0].length+types[1].length+types[2].length+types[3].length+types[4].length+types[5].length);


types.forEach((t, ti) => {
    types[ti] = t.filter(tt => starts.filter(s => tt.endsWith(s)).length > 0 &&
                            ends.filter(s => tt.startsWith(s)).length > 0);
})

console.log(types[0].length+types[1].length+types[2].length+types[3].length+types[4].length+types[5].length);

var prevCondition = ''

function seek(typesRemaining, current) {
    if (typesRemaining.length == 0) {
        console.log('DONE!', current, current.reduce((a, c) => a+parseInt(c), 0));
        return;
    }
    if (current.length == 0) {
        typesRemaining.forEach(t => {
            types[t].forEach(tt => {
                var newCurrent = [tt];
                var newTypesRemaining = typesRemaining.filter(tr => tr != t);
                seek(newTypesRemaining, newCurrent);
            })
        });
    } else {
        var last = current[current.length-1];
        var lastEnd = last.substring(2);
        typesRemaining.forEach(t => {
            types[t].forEach(tt => {
                if (tt.startsWith(lastEnd)) {
                    var goodStart = true;
                    if (typesRemaining.length == 1) {
                        goodStart = false;
                        var firstStart = current[0].substring(0, 2);
                        if (tt.endsWith(firstStart)) {
                            goodStart = true;
                        }
                    }
                    if (goodStart) {
                        var newCurrent = current.map(c => c);
                        newCurrent.push(tt);
                        var newTypesRemaining = typesRemaining.filter(tr => tr != t);
                        seek(newTypesRemaining, newCurrent);
                    }
                }
            })
        });
    }
}

seek([0, 1, 2, 3, 4, 5], []);

//onsole.log(types);
