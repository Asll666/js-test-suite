load("201224b0d1c296b45befd2285e95dd42.js");
var g = newGlobal();
var dbg = new Debugger(g);
dbg.onDebuggerStatement = function (frame) {
    var code = "assertEq(c, 'ok');\n";
    assertEq(frame.evalWithBindings("eval(s)", {s: code, a: 1234}).return, undefined);
};
g.eval("function first() { return second(); }");
g.eval("function second() { return eval('third()'); }");
g.eval("function third() { debugger; }");
g.evaluate("first();");
