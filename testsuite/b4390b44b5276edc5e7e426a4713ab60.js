load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("e2c808509c360663d6364e14c187fc8f.js");

var outer = "unmodified";

function f(v)
{
  if (v + "")
    ({ [(outer = "modified")]: v } = v);
}

assertEq(outer, "unmodified");
f(true);
assertEq(outer, "modified");

outer = "unmodified";
f({});
assertEq(outer, "modified");

outer = "unmodified";
assertThrowsInstanceOf(() => f(null), TypeError);
assertEq(outer, "unmodified");

assertThrowsInstanceOf(() => f(undefined), TypeError);
assertEq(outer, "unmodified");


function g(v)
{
  if (v + "")
    ({ [{ toString() { outer = "modified"; return 0; } }]: v } = v);
}

outer = "unmodified";
g(true);
assertEq(outer, "modified");

outer = "unmodified";
g({});
assertEq(outer, "modified");

outer = "unmodified";
assertThrowsInstanceOf(() => g(undefined), TypeError);
assertEq(outer, "unmodified");

assertThrowsInstanceOf(() => g(null), TypeError);
assertEq(outer, "unmodified");
