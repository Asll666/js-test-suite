load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:ReferenceError

// Binary: cache/js-dbg-64-edf8075b0333-linux
// Flags:
//

var g = newGlobal();
var dbg = new Debugger(g);
dbg.onDebuggerStatement = function (frame) {
    assertEq(dumpStack(), true);
};
g.eval("function f(a, [b, c], {x: [y], z: w}, {q}) { debugger; }");
g.eval("f(1, [2, 3], {x: [4], z: 5}, {q: 6});");
