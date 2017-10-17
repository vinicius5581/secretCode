function shuffle(array) {
  var n = array.length, t, i;
  while (n) {
    i = Math.random() * n-- | 0; // 0 ≤ i < n
    t = array[n];
    array[n] = array[i];
    array[i] = t;
  }
  return array;
}

// DON’T DO THIS!
function shuffleBad(array) {
  return array.sort(function(a, b) {
    return Math.random() - .5; // ಠ_ಠ
  });
}


function generateArray(arrayLength){
    var arr = [];
    if (arrayLength === 0) {
      return null;
    }
    for (var i = 0; i < arrayLength; i++){
      arr.push(i+1);
    }
    return arr;
}

var arr = generateArray(20);


console.log(arr);
console.log(shuffle(arr));
console.log(shuffleBad(arr));
