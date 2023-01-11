var maxDs = 0;

for(var a = 1; a < 100; a++) {
    for (var b = 1; b < 100; b++) {
        var mul = BigInt(a);
        var solution = BigInt(a);
        for(var i = 0; i < b-1; i++) {
            solution *= mul;
        }

        var str = solution+'';
        var ds = str.split('').reduce((a, c) => {
            return a + parseInt(c);
        }, 0);

        if (ds > maxDs) {
            maxDs = ds;
        }
    }
}

console.log(maxDs);