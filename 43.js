var Digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

var sums = 0;

function permute(d, rem) {
    if (rem.length == 0) {
        // check

        var good = [2, 3, 5, 7, 11, 13, 17].every((div, divi) => {
            var nn = parseInt(d.substring(divi+1, divi+4));
            return nn % div == 0;
        });

        if (good) {
            sums += parseInt(d);
        }

        return;
    }

    for(var i = 0; i < rem.length; i++) {
        var na = rem.slice();
        na.splice(i, 1);
        permute(d+rem[i], na);
    }
}

permute('', Digits.slice());

console.log(sums);