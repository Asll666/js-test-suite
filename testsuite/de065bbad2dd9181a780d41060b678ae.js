load("201224b0d1c296b45befd2285e95dd42.js");
var a = [];
var count = 0;
a.valueOf = function() {
    ++count;
}
function f(a) {
    6 - a;
}

f(3);
for (var i=0; i<10; i++)
    f(a);

assertEq(count, 10);