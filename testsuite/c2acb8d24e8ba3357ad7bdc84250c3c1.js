load("201224b0d1c296b45befd2285e95dd42.js");
// Clearing a Set after deleting some entries works.

var s = new Set(["a", "b", "c", "d"]);
for (var v of s)
    if (v !== "c")
        s.delete(v);
s.clear();
assertEq(s.size, 0);
assertEq(s.has("c"), false);
assertEq(s.has("d"), false);
