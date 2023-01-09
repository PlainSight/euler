var set = {};

function next(current, remaining) {
    if (remaining.length == 0) {
        // try various chops 
        
        for(var i = 2; i < 7; i++) {
            for (var j = i+1; j < 7; j++) {
                var mc = parseInt(current.substring(0, i));
                var mi = parseInt(current.substring(i, j));
                var prod = parseInt(current.substring(j));
                if (mc * mi == prod) {
                    set[prod] = prod;
                }
            }
        }
        current
        return;
    }
    for(var i = 0; i < remaining.length; i++) {
        next(current+remaining[i], remaining.map(m => m).filter((n, ni) => ni != i));
    }
}

next('', [1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log(Object.values(set).reduce((a, c) => a + c, 0));