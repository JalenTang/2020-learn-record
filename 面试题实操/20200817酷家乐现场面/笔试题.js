// 1
var x = 1;
if (function f() {}) {
  x += typeof f;
}

console.log(x);

// 2
var f = function g() {};
console.log(g);

// 3
function f() {
  function f() { return 1  }
  return f();
  function f() { return 2 }
}
console.log(f());

// 4
function f() {
  console.log(typeof arguments);
}
f();

// 5
var foo = {
    bar: function () { return this.baz },
    baz: 1
};

(function() {
    console.log(typeof arguments[0]());
})(foo.bar)
