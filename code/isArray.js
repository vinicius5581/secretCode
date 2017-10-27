function is_array(arr){
  return arr && arr.constructor === Array;
}


var a = '[1, 2, 3]';
var b = [1, 2, 3];
var c = {
  d: [1, 2, 3]
}
var e = 'word';

console.log(is_array(a));
console.log(is_array(b));
console.log(is_array(c.b));
console.log(a.length);
console.log(c.length);
console.log(e.length);
