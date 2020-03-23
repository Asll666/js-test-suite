load("201224b0d1c296b45befd2285e95dd42.js");
// While eval code is running, findScripts returns its script.

var g = newGlobal();
var dbg = new Debugger(g);
var log;

g.check = function () {
    log += 'c';
    var frame = dbg.getNewestFrame();
    assertEq(frame.type, "eval");
    assertEq(dbg.findScripts().indexOf(frame.script) != -1, true);
};

log = '';
g.eval('check()');
assertEq(log, 'c');