load("201224b0d1c296b45befd2285e95dd42.js");
// Maps can hold at least 64K values.

var N = 1 << 16;
var m = new Map;
for (var i = 0; i < N; i++)
    assertEq(m.set(i, i), m);
for (var i = 0; i < N; i++)
    assertEq(m.get(i), i);
