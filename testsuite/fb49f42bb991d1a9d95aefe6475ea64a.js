load("201224b0d1c296b45befd2285e95dd42.js");
// frame.onStep can coexist with breakpoints.

var g = newGlobal();
var dbg = Debugger(g);
var log = '';
dbg.onEnterFrame = function (frame) {
    var handler = {hit: function () { log += 'B'; }};
    var lines = frame.script.getAllOffsets();
    for (var line in lines) {
        line = Number(line);
        var offs = lines[line];
        for (var i = 0; i < offs.length; i++)
            frame.script.setBreakpoint(offs[i], handler);
    }

    frame.onStep = function () { log += 's'; };
};

g.eval("one = 1;\n" +
       "two = 2;\n" +
       "three = 3;\n" +
       "four = 4;\n");
assertEq(g.four, 4);

// Breakpoints hit on all four lines.
assertEq(log.replace(/[^B]/g, ''), 'BBBB');

// onStep was called between each pair of breakpoints.
assertEq(/BB/.exec(log), null);
