function isPrime(n) {
    if (n < 0) {
        return false;
    }
    var top = Math.floor(Math.sqrt(n));
    if (top % 2 == 0) {
        top++;
    }

    for(var i = top; i > 1; i -= 2) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

var allNums = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

var numsForLengths = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => allNums.slice(0, n));


var largest = 0;

for(var i = 3; i < 987654321; i += 2) {
    if (isPrime(i)) {
        var str = (i+'');
        var checkArray = numsForLengths[str.length-1];
        if(checkArray.every(n => str.includes(n))) {
            if (i > largest) {
                largest = i;
                console.log(largest);
            }
        }
    }
}

console.log(largest);