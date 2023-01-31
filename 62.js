var cubes = [];
var cubesMap = {};
var biggestCube = 0;

function isCube(n) {
    if (n > biggestCube) {
        populateCubesTo(n);
    }
    return !!cubesMap[n];
}

function populateCubesTo(n) {
    for(var i = cubes.length;;i++) {
        var cube = i*i*i;
        cubes.push(cube);
        cubesMap[cube] = true;
        if (cube > biggestCube) {
            biggestCube = cube;
        }
        if (cube > n) {
            return;
        }
    }
}

var digitsHavePermutationsThatAreCube = {};

for(var c = 0; ; c++) {
    var cube = c*c*c;

    var digits = (''+cube).split('').sort().join();
    digitsHavePermutationsThatAreCube[digits] = digitsHavePermutationsThatAreCube[digits] || [];
    digitsHavePermutationsThatAreCube[digits].push(cube);

    if (digitsHavePermutationsThatAreCube[digits].length == 5) {
        console.log(Math.min(...digitsHavePermutationsThatAreCube[digits]));
        return;
    }
}

// for(var c = 0; ; c++) {
//     var cube = c*c*c;
//     var foundCubes = {};

//     console.log(c, cube);

//     function permute(remaining, current) {
//         if (remaining.length == 0) {
//             if (current[0] == '0') {
//                 return;
//             }
//             var permutedNumber = parseInt(current.join(''));
//             if (isCube(permutedNumber)) {
//                 foundCubes[permutedNumber] = permutedNumber;
//             }
//         } else {
//             for(var r = 0; r < remaining.length; r++) {
//                 if (remaining[r] == 0 && current.length == 0) {
//                     continue;
//                 }
//                 var newCurrent = current.map(c => c);
//                 newCurrent.push(remaining[r]);
//                 var newRemaining = remaining.map(r => r);
//                 newRemaining.splice(r, 1);
//                 permute(newRemaining, newCurrent);
//             }
//         }
//     }

//     permute((''+cube).split(''), []);

//     if (Object.values(foundCubes).length == 5) {
//         console.log(cube, Object.values(foundCubes));
//         return;
//     }
// }

// console.log(isCube(27));
// console.log(isCube(8));
// console.log(cubes, cubesMap)