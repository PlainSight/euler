var coins = [200, 100, 50, 20, 10, 5, 2, 1];

var ways = 0;

function next(ci, val) {
    if (ci >= coins.length) {
        if (val == 200) {
            ways++;
        }
        return;
    }
    for(var i = 0; val + i*coins[ci] <= 200; i++) {
        next(ci+1, val + i*coins[ci]);
    }
}

next(0, 0);

console.log(ways);