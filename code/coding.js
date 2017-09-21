/**
/*  Question: What is the value of foo.length?
**/

var foo = [];
foo.push(1);
foo.push(2);
console.log(foo);  // 2
console.log(foo.length);  // 2


/**
/*  Question: What is the value of foo.x?
**/

var foo = {n: 1};
console.log("foo: ", foo);  // { n: 1 }

var bar = foo;
console.log("bar: ", bar); // { n: 1 }

foo.x = foo = {n: 2};
console.log("foo: ", foo); // { n: 2 }
console.log("foo.x: ", foo.x); // undefined

foo.x = 5;
console.log("foo.x: ", foo.x); // 5

a = foo = {n:18};
console.log("foo: ", foo); // { n: 18 }
console.log("a: ", a); // { n: 18 }

a.b = foo = {n:21};
console.log("foo: ", foo); // { n: 21 }
console.log("a.b: ", a.b); // { n: 21 }

/**
/*  Question: What does the following code print?
**/

console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');

// one
// three
// two

/**
/*  Question: What is the value of foo?
**/

var foo = 10 + '20';

console.log(foo); // 1020

/**
/*  Question: What is the outcome of the two console.log below?
**/
var foo1 = "Hello";

(function() {
  var bar1 = " World";
  console.log(foo1 + bar1);
})();

console.log(foo1 + bar1); // bar1 is not defined
