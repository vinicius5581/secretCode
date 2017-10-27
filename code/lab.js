var time = 2;
var space_x = 1;
var space_y = 1;
var space_z = 1;
// time
for(var t=0; t < time; t++) {
  //space x
  for(var x=0; x < space_x; x++) {
  //space y
    for(var y=0; y < space_y; y++) {
      //space z
      for(var z=0; z < space_z; z++) {
        var p = document.createElement('p');
        var p_text = document.createTextNode(`t: ${t} x: ${x} y: ${y} z: ${z}`);
        p.appendChild(p_text);
        document.getElementById('result').appendChild(p);
        console.log(`t: ${t} x: ${x} y: ${y} z: ${z}`);
      }
    }
  }
}

// 'strict mode'
// var a = 01
// console.log(a);

// var str = "recacer";
// var str2 = "racecar";
//
// function isAnyPermutationPalindrome(str){
//   var strArr = str.split('');
//   var unmatchs = 0;
//   var lettersCount = {};
//   for(var i = 0; i < strArr.length; i++){
//     if(!lettersCount[strArr[i]]){
//       lettersCount[strArr[i]] = 0;
//     }
//     lettersCount[strArr[i]]++;
//   }
//   for(var key in lettersCount){
//     if(lettersCount[key] % 2 !== 0) {
//       unmatchs++;
//     }
//   }
//   return unmatchs <= 1;
// }
//
//
// console.log(isAnyPermutationPalindrome(str));
// console.log(isAnyPermutationPalindrome(str2));
//
//
// var WorldsCreator = function(name){
//   this.name = name;
//
//   this.anotherMethod = function(){
//     console.log('anotherMethod');
//   }
//
//   this.toString = function(){
//     console.log(this.name);
//   }
// }
//
// WorldsCreator.prototype.toString2 = function(){
//   console.log(this.name);
// }
//
// var myWorldTest = new WorldsCreator("Vini's land");
//
// // myWorldTest.toString();
// // myWorldTest.anotherMethod();
// // myWorldTest.toString2();
//
//
// // var myWorld = function(){
// //
// // }();
