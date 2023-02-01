function determinePeriod(n) {
    var startDigit = Math.floor(Math.sqrt(n));

    var fractionDigits = [];
    var subs = [];
    var denoms = [];

    var gcd = function(a, b) {
        if (!b) {
          return a;
        }
      
        return gcd(b, a % b);
      }

    function checkSequenceFound() {
        if (fractionDigits.length < 2) {
            return false;
        }
        if (fractionDigits[0] == fractionDigits[fractionDigits.length-1] &&
            subs[0] == subs[subs.length-1] &&
            denoms[0] == denoms[denoms.length-1]) {
                return true;
        }
        return false;
    }

    function calculateNextValues(sub, denom) {
        var newDenom = n - (sub*sub);
        var d = gcd(newDenom, denom);
        newDenom /= d;

        var newSub = 0;
        var newFractionDigit = 0;

        // solve
        // sub / newDenom = newFractionDigit - newSub / newDeom;
        for(var nfd = 9; nfd >= 1; nfd--) {
            var ns = sub - nfd*newDenom;
            if (ns < 0 && Math.abs(ns) <= startDigit) {
                newSub = Math.abs(ns);
                newFractionDigit = nfd;
                break;
            }
        }

        console.log(newFractionDigit, newSub, newDenom);
        fractionDigits.push(newFractionDigit);
        subs.push(newSub);
        denoms.push(newDenom);
    }

    calculateNextValues(startDigit, 1);
    calculateNextValues(subs[subs.length-1], denoms[denoms.length-1]);
    calculateNextValues(subs[subs.length-1], denoms[denoms.length-1]);
    calculateNextValues(subs[subs.length-1], denoms[denoms.length-1]);
    calculateNextValues(subs[subs.length-1], denoms[denoms.length-1]);
    calculateNextValues(subs[subs.length-1], denoms[denoms.length-1]);
    calculateNextValues(subs[subs.length-1], denoms[denoms.length-1]);
    calculateNextValues(subs[subs.length-1], denoms[denoms.length-1]);
    calculateNextValues(subs[subs.length-1], denoms[denoms.length-1]);

    // while(!checkSequenceFound()) {
    //     calculateNextValues(fractionDigits[fractionDigits.length-1], subs[subs.length-1], denoms[denoms.length-1]);
    // }
}

determinePeriod(23);