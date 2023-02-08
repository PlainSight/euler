var max = '';

function checkPermutation(perm) {
    // inner = 0, 1, 2, 3, 4
    //outer = 5, 6, 7, 8, 9
    // sets 
    /*
        5, 0, 1
        6, 1, 2
        7, 2, 3
        8, 3, 4
        9, 4, 0
    */

    var indicesOfSets = [
        [5, 0, 1],
        [6, 1, 2],
        [7, 2, 3],
        [8, 3, 4],
        [9, 4, 0]
    ];

    if (perm.length == 6) {
        indicesOfSets = [
            [3, 0, 1],
            [4, 1, 2],
            [5, 2, 0]
        ]
    }

    var outerValues = indicesOfSets.map(ios => perm[ios[0]]);
    var smallestOuterValues = Math.min(...outerValues);
    var indexOfSmallestOuterValue = outerValues.indexOf(smallestOuterValues);
    
    var sets = indicesOfSets.map(i => {
        return {
            vals: [perm[i[0]], perm[i[1]], perm[i[2]]],
            sum: perm[i[0]] + perm[i[1]] + perm[i[2]]
        }
    });

    var sorted = sets.slice(indexOfSmallestOuterValue).concat(sets.slice(0, indexOfSmallestOuterValue));

    if (sorted.filter(a => a.sum == sorted[0].sum).length != indicesOfSets.length) {
        return;
    } else {
        // check values lengths
        var str = sorted.reduce((a, c) => a + c.vals.join('') ,'');

        if (str.length == 16 || str.length == 9) {
            console.log(sorted);
            console.log(str);

            if (BigInt(str) > BigInt(max)) {
                max = str;
            }
        }
    }
}

function permute(remaining, picked) {
    if(remaining.length == 0) {
        checkPermutation(picked);
    } else {
        for(var i = 0; i < remaining.length; i++) {
            var newRemaining = remaining.slice();
            var newPicked = picked.slice();
            newPicked.push(remaining[i]);
            newRemaining.splice(i, 1);
            permute(newRemaining, newPicked);
        }
    }
}

permute([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [])

console.log(max);