load("201224b0d1c296b45befd2285e95dd42.js");
setJitCompilerOption("ion.warmup.trigger", 20);
Function.prototype.__proto__ = new Boolean({ get: function() {} }, {});
function g(x, y) {}
function f() {
    g.apply(this, arguments);
}
for (var i = 0; i < 130; ++i)
    f(i, i*2);
