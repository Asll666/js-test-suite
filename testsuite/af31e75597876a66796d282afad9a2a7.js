load("201224b0d1c296b45befd2285e95dd42.js");
// Error handling if parsing a resumption value throws.

var g = newGlobal();
var dbg = Debugger(g);
var rv;
dbg.onDebuggerStatement = stack => rv;
dbg.uncaughtExceptionHook = function (exc) {
    assertEq(exc, "BANG");
    return {return: "recovered"};
};

rv = {get throw() { throw "BANG"; }};
assertEq(g.eval("debugger; false;"), "recovered");

rv = new Proxy({}, {has() { throw "BANG"; }});
assertEq(g.eval("debugger; false;"), "recovered");
