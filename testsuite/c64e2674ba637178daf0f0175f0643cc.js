load("201224b0d1c296b45befd2285e95dd42.js");
// Test that Debugger.Frame.prototype.environment works at all pcs of a script
// with an aliased block scope.

var g = newGlobal();
var dbg = new Debugger(g);
dbg.onDebuggerStatement = function (frame) {
  frame.onStep = (function ()  { frame.environment; });
};
g.eval("debugger; for (let i of [1,2,3]) print(i);");
