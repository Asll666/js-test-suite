load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test|

// If a frame's onPop handler throws, we should not call the
// onExceptionUnwind hook for that frame.
var g = newGlobal();
var dbg = new Debugger(g);

g.eval('function f() { var y; debugger; }');

dbg.onExceptionUnwind = function() {
    assertEq(0, 1);
};

dbg.onDebuggerStatement = function handleDebugger(frame) {
    frame.onPop = function(c) {
	return {throw: 555};
    }
};

try {
    g.f();
    assertEq(0, 2);
} catch(e) {
    assertEq(e.toString().includes("555"), true);
}
