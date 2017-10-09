var FooErrors = function(a) {
    function bar() {
        return a;
    }

    this.baz = function() {
        return a;
    }
}

FooErrors.prototype = {
    biz: function() {
        return a;
    }
}

var g = new FooErrors( 7 );
// g.bar(); // Error
// g.baz(); // 7
// g.biz(); // Error


////////////////////////////////////

var Foo = function( a ) {
  this.bar = function() {
      return a;
  }
  this.baz = function() {
      return a;
  }

  this.a = a;

};

Foo.prototype = {
  biz: function() {
    return this.a;
  }
};

var f = new Foo( 7 );
console.log(f.bar()); // 7
console.log(f.baz()); // 7
console.log(f.biz()); // 7
