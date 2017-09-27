


var debounce = function(fn, delay) {
    
    return function(a, b){
        setTimeout(fn,3000)
    }
   
}




var debouncedFn = debounce(fetchSomething, 3000);


debouncedFn()
debouncedFn()
debouncedFn()

debouncedFn()
debouncedFn()


