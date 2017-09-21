/**
 * Question: How would you verify a prime number?
 */

function isPrime(n){
  var divisor = 2;
  while (n > divisor){
    if(n % divisor == 0){
     return false;
    }
    else
      divisor++;
  }
  return true;
}

console.log(isPrime(137)); // true
console.log(isPrime(237)); // false

/**
 * Question: Can you make this better?
 */


function isPrime2(n)
{
  var divisor = 3,
      limit = Math.sqrt(n);

  //check simple cases
  if (n == 2 || n == 3)
     return true;
  if (n % 2 == 0)
     return false;

  while (divisor <= limit)
  {
    if (n % divisor == 0)
      return false;
    else
      divisor += 2;
  }
  return true;
}

console.log(isPrime(137)); // true
console.log(isPrime(237)); // false
