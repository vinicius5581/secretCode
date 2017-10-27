function *permute(a, n = a.length) {
  if (n <= 1) yield a.slice();
  else for (let i = 0; i < n; i++) {
    yield *permute(a, n - 1);
    const j = n % 2 ? 0 : i;
    [a[n-1], a[j]] = [a[j], a[n-1]];
  }
}

console.log(Array.from(permute("xyz".split(''))).map(perm => perm.join('')));


function generate(n, array) {
    console.log("ENTER", n, array)
    if (n == 1) {
        return array;
    }
    else {
        for (var i = 0; i < n - 1; i++) {
            console.log("RECUR", n-1, array)
            generate(n - 1, array);
            if (n % 2 !== 0) {
                console.log("SWAP ", n, array)
                swap(array[i], array[n - 1]);
            }
            else {
                console.log("SWAP ", 0, n-1)
                swap(array[0], array[n - 1]);
            }
            console.log("array", array)
        }
        console.log("RECUR 2", n-1, array)
        generate(n - 1, array);
    }
    console.log("LEAVE", n, array)
}

generate(5, ['A','B','C','D','E']);
