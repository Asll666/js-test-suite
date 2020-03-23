load("201224b0d1c296b45befd2285e95dd42.js");
// => binds tighter than ,

var f, g;
g = (f, h => h + 1);  // sequence expression: (f, (h => h + 1))
assertEq(g.length, 1);
assertEq(g(37), 38);
