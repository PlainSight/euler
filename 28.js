/*
21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13
*/

function valueOfCornersAtLayer(layer) {
    var layerBelow = layer-1;

    var sizeOfLayersBelow = 0;

    var vals = 1;

    if (layer > 0) {
        sizeOfLayersBelow = (1 + layerBelow + layerBelow)*(1 + layerBelow + layerBelow);

        var sideLength = (layer*2);

        vals = sizeOfLayersBelow*4 + sideLength*10;
    }

    return vals;
}

var totalSum = 0;

for(var i = 0; i <= 500; i++) {
    totalSum += valueOfCornersAtLayer(i);
}

console.log(totalSum);