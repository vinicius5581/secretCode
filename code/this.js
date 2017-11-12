var foo = {
    a: function() {
        console.log(this);
    },
    b: 2

};

foo.a();

var bar = foo.a;

bar();
