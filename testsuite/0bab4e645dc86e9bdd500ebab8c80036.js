load("201224b0d1c296b45befd2285e95dd42.js");
actual = '';
expected = '0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,';

function g(a) {
  a();
}

function f(y) {
  var q;
  q = function() { appendToActual(y); };
  for (var i = 0; i < 7; ++i) {
    g(q);
  }
}

for (var i = 0; i < 5; ++i) {
  f(i);
 }


assertEq(actual, expected)
