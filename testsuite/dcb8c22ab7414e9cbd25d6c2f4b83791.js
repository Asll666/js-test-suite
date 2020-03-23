load("201224b0d1c296b45befd2285e95dd42.js");
actual = '';
expected = '10,19,100199,2001001999,30020010019999,400300200100199999,5004003002001001999999,60050040030020010019999999,700600500400300200100199999999,8007006005004003002001001999999999,90080070060050040030020010019999999999,';

function f() {
  var x = 10;
  
  var g = function(p) {
    for (var i = 0; i < 10; ++i)
      x = p + i + '';
  }
  
  for (var i = 0; i < 10; ++i) {
    appendToActual(x);
    g(100 * i + x);
  }

  appendToActual(x);
}

f();


assertEq(actual, expected)
