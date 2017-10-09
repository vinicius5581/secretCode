function makeFlatArray(arr) {
    var flatternedArray = [].concat(...arr);
    return flatternedArray.some(Array.isArray) ? makeFlatArray(flatternedArray) : flatternedArray;
}


var arr = [[1, 3, 5],[4, 7, 3],[[2, 3], 4]];

console.log(makeFlatArray(arr));
