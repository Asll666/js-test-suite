load("201224b0d1c296b45befd2285e95dd42.js");
var n = 0;
var a = [];
for (var i = 0; i < 20; i++)
    a[i] = {};
a[18].watch("p", function () { n++; });
delete a[18].p;
for (var i = 0; i < 20; i++)
    a[i].p = 0;
assertEq(n, 1);
