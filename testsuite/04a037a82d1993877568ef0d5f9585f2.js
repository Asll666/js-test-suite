load("201224b0d1c296b45befd2285e95dd42.js");
var actual = '';

var a = [0, 1];
a.x = 10;
delete a.x;
for (var i in a) {
    appendToActual(i);
    a.pop();
}

assertEq(actual, "0,");
