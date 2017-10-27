// Implement an algorithm to determine if a string has all unique characters. What if you
// can not use additional data structures?

function isUniqueChars(str){
  var char_set = {};
  for (var i = 0; i < str.length; i++) {
    var val = str.charAt(i);
    if (char_set[val]) {
      return false;
    } else {
      char_set[val] = 1;
    }
  }
  return true;
}

console.log(isUniqueChars('car'));  // true
console.log(isUniqueChars('cara'));  // false
console.log(isUniqueChars('car '));  // true
console.log(isUniqueChars('car  ')); // false
