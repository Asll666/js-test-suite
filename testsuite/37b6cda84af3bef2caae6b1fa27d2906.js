load("201224b0d1c296b45befd2285e95dd42.js");
// only fix doubles for slots which the recompiled script thinks are doubles.
function foo(x) {
  var y = x & 0xffff;
  y = (y * (x * 1000));
  assertEq(y, 140735340806145000);
}
foo(0x7fffffff);
