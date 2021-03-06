load("201224b0d1c296b45befd2285e95dd42.js");
var counterF = 0;

function f(v, value)
{
  if (v == undefined)
    counterF++;
  assertEq(counterF, value,
           "failed: " + v + " " + value);
}

f({}, 0);
f({}, 0);
f(null, 1);
f(null, 2);
f(undefined, 3);
f(undefined, 4);
f(objectEmulatingUndefined(), 5);
f(objectEmulatingUndefined(), 6);
f(Object.prototype, 6);
f(Object.prototype, 6);

var counterG = 0;

function g(v, value)
{
  if (v == undefined)
    counterG++;
  assertEq(counterG, value,
           "failed: " + v + " " + value);
}

g({}, 0);
g({}, 0);

var counterH = 0;

function h(v, value)
{
  if (v == undefined)
    counterH++;
  assertEq(counterH, value,
           "failed: " + v + " " + value);
}

h(objectEmulatingUndefined(), 1);
h(objectEmulatingUndefined(), 2);
