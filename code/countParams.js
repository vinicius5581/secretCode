function countParams(params, string) {
   var count = 0;
   for(var i=0; i<string.length;i++){
       if(string[i] === params) {
           count++;
       }
   } 
}

console.log(countParams('a', 'umbrella'));
console.log(countParams('p', 'apple'));