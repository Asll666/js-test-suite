load("201224b0d1c296b45befd2285e95dd42.js");
var ws = new WeakSet;
var A = [];
for (var i = 0; i < 1024; ++i) {
    var value = {};
    ws.add(value);
    A.push(value);
}
gc();
for (i = 0; i < A.length; A++) {
    value = A[i];
    assertEq(ws.has(value), true);
}
