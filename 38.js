/*
Take the number 192 and multiply it by each of 1, 2, and 3:

192 × 1 = 192
192 × 2 = 384
192 × 3 = 576
By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)

The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).

What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?
*/

/*
Largest pandigital 9 digit number is 987654321
*/

var largestPandigitalNumber = 0;

for(var n = 2; n <= 9; n++) {
    for(var k = 1; n*(1 + Math.floor(Math.log10(k))) <= 9; k++) {
        
        var bits = [];

        for(var nn = 1; nn <= n; nn++) {
            bits.push((nn*k)+'');
        }

        var number = bits.join('');

        if (number.length == 9) {
            // check if it's pandigital
            var num = parseInt(number);

            var allNums = ['1', '2', '3', '4', '5', '6', '7', '8', '9'].every(n => number.includes(n));

            if (allNums && num > largestPandigitalNumber) {
                largestPandigitalNumber = num;
            }
        }
    }
}

console.log(largestPandigitalNumber);