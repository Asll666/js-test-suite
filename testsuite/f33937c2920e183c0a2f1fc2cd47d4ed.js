load("201224b0d1c296b45befd2285e95dd42.js");
// Bug 744731 - findScripts() finds active debugger executeInGlobal scripts.

var g = newGlobal();
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    hits++;
    assertEq(dbg.findScripts().indexOf(dbg.getNewestFrame().script) !== -1, true);
};
gw.executeInGlobal("debugger;");
assertEq(hits, 1);
