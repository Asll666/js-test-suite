load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError

var N = 70 * 1000;
var x = build("&&")();
function build(operation) {
    var a = [];
    for (var i = 1; i != N - 1; ++i) a.push("f()");
    return new Function(a.join(operation));
}
