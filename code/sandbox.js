var Stack = function() {
  this.count = 0;
  this.stack = {};

  this.push = function(value) {
    this.stack[this.count] = value;
    this.count++;
  }

  this.peek = function() {
    return this.stack[this.count - 1];
  }

  this.pop = function() {
    if(this.count === 0) {
      return undefined;
    }

    this.count--;
    var store = this.stack[this.count];
    delete this.stack[this.count];
    return store;
  }

  this.size = function() {
    return this.count;
  }

}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("Vinicius");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());




// function searchInArray(arr, searchString){
//   console.log(arr);
//   console.log(searchString);
//
//   arr.sort((a, b)=> a > b);
//
//
//
//   // console.log(arr.length / 2);
//   var min = 0;
//   var max = arr.length;
//   var needle = min + (max - min)/ 2;
//
//   while(max > min) {
//     if (needle === search) {
//
//     }
//   }
// }
//
//
// var a = [12,1,3,5,9,10,6,2];
//
// searchInArray(a, 9);
