load("201224b0d1c296b45befd2285e95dd42.js");
// Don't crash

function g(foo) {
  for (a in foo) {
  }
}

var makegen = eval("\n\
  (function(b) {\n\
      var h = \n\
        eval(\"new function() { yield print(b) }\" ); \n\
    return h\n\
  })\n\
");

g(makegen());
