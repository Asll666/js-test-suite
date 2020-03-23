load("201224b0d1c296b45befd2285e95dd42.js");
// An Environment for a `with` statement does not observe bindings ruled out by @@unscopables.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

let g = newGlobal();
g.eval(`
    let x = 'global';
    function f() {
        let obj = {
            x: 'obj',
            y: 'obj',
            [Symbol.unscopables]: {x: 1},
        };
        with (obj)
            debugger;
    }
`);
let dbg = Debugger(g);
let hits = 0;
dbg.onDebuggerStatement = function (frame) {
    let env = frame.environment;

    assertEq(env.find("x") !== env, true);
    assertEq(env.names().indexOf("x"), -1);
    assertEq(env.getVariable("x"), undefined);
    assertThrowsInstanceOf(() => env.setVariable("x", 7), TypeError);

    assertEq(env.find("y") === env, true);
    assertEq(env.getVariable("y"), "obj");
    env.setVariable("y", 8);

    assertEq(frame.eval("x").return, "global");
    assertEq(frame.eval("y").return, 8);
    hits++;
};
g.f();
assertEq(hits, 1);
