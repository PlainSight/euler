/* 
The first known prime found to exceed one million digits was discovered in 1999, and is a Mersenne prime of the form 2^6972593ā1; it contains exactly 2,098,960 digits. Subsequently other Mersenne primes, of the form 2^pā1, have been found which contain more digits.

However, in 2004 there was found a massive non-Mersenne prime which contains 2,357,207 digits: 28433Ć2^7830457+1.

Find the last ten digits of this prime number.
*/

var mul = BigInt(1);
for(var j = 0; j < 7830457; j++) {
    mul *= BigInt(2);
    mul = mul % BigInt(10000000000);
}

var res = (BigInt(28433) * mul) + BigInt(1);
var str = (res+'');
var sub = str.substring(str.length - 10);

console.log(sub);