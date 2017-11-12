var foo = function() {
    var a = "12";
    var b = function(param) {
        console.log(param + a);
    };
    return b;
}

var bar = foo();

var someAsync = function(cb) {
    setTimeout(function() {
        cb("21");
    }, 0);
};

someAsync(bar);
