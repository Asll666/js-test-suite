load("201224b0d1c296b45befd2285e95dd42.js");
// findScripts finds non-compile-and-go scripts

var g = newGlobal();
g.evaluate("function f(x) { return x + 1; }");
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
var s = dbg.findScripts();
var fw = gw.getOwnPropertyDescriptor("f").value;
assertEq(s.indexOf(fw.script) !== -1, true);
