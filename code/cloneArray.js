function array_Clone(arr) {
  return [...arr];
}

function array_Clone2(arra1) {
 return arra1.slice(0);
};


console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
console.log(array_Clone2([1, 2, 4, 0]));
console.log(array_Clone2([1, 2, [4, 0]]));
