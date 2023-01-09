/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

var nums = [];
nums.length = 10000;

for(var i = 0; i < nums.length; i++) {
    nums[i] = i;
}

nums = nums.map(n => {
    var divs = [1];
    for(var i = 2; i <= n/2; i++) {
        if (n % i == 0) {
            divs.push(i);
        }
    }
    return divs.reduce((a, c) => a+c, 0);
});

console.log(nums);

var set = {};

for(var ii = 1; ii < nums.length; ii++) {
    for(var jj = ii+1; jj < nums.length; jj++) {
        if (ii == nums[jj] && jj == nums[ii]) {
            set[jj] = jj;
            set[ii] = ii;
        }
    }
}

console.log(Object.values(set).reduce((a, c) => a+c, 0));