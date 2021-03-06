load("201224b0d1c296b45befd2285e95dd42.js");
// Adding a debuggee allowed with scripts on stack.

var g = newGlobal();
g.dbg = new Debugger;

g.eval("" + function f(d) {
  g(d);
  if (d)
    assertEq(dbg.hasDebuggee(this), true);
});

g.eval("" + function g(d) {
  if (!d)
    return;

  dbg.addDebuggee(this);
});

g.eval("(" + function test() {
  f(false);
  f(false);
  f(true);
  f(true);
} + ")();");
