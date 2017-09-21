/**
/*  Question: How do get nth Fibonacci number?
**/


function fibonacci(n){
  var fibo = [0, 1];
  if (n <= 2) return 1;
  for (var i = 2; i <=n; i++){
   fibo[i] = fibo[i-1]+fibo[i-2];
  }
 return fibo[n];
}

console.log(fibonacci(12)); // 144

//  run time complexity?
//  O(n)


// Recursive

function fibonacci2(n){
  if(n<=1)
    return n;
  else
    return fibonacci2(n-1) + fibonacci2(n-2);
}

console.log(fibonacci(12)); // 144

//  run time complexity?
//  O(2^n).
