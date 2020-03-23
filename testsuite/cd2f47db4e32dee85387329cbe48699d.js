load("201224b0d1c296b45befd2285e95dd42.js");
function f(v, value)
{
  var b = v === undefined;
  assertEq(b, value,
           "failed: " + v + " " + value);
}

f({}, false);
f({}, false);
f(null, false);
f(null, false);
f(undefined, true);
f(undefined, true);
f(objectEmulatingUndefined(), false);
f(objectEmulatingUndefined(), false);
f(Object.prototype, false);
f(Object.prototype, false);

function g(v, value)
{
  var b = v === undefined;
  assertEq(b, value,
           "failed: " + v + " " + value);
}

g({}, false);
g({}, false);

function h(v, value)
{
  var b = v === undefined;
  assertEq(b, value,
           "failed: " + v + " " + value);
}

h(objectEmulatingUndefined(), false);
h(objectEmulatingUndefined(), false);