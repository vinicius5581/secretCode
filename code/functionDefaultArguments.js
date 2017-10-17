var myFunction = function myFunction(arg1, arg2) {
  var arg1 = (typeof arg1 !== 'undefined') ? arg1 : "default argument one";
  var arg2 = arg2 || "default argument two";
  console.log(arg1 + " & " + arg2);
};

myFunction();
