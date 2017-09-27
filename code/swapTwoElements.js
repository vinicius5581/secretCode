function swapTwoElements(arr, idx1, idx2){
  var temp;
  temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function swapTwoElementsImutable(arr, idx1, idx2){
   var a = Object.assign([], arr, {[idx1]: arr[idx2], [idx2]: arr[idx1]});
   return a;
}

var arr = [1,2,3,4,5];


console.log(arr);
swapTwoElements(arr,0,4);
console.log(arr);

var arr2 = [1,2,3,4,5];

console.log(arr2);
console.log(swapTwoElementsImutable(arr2,0,4));
console.log(arr2);