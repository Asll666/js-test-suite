load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:TypeError
function f() {
    with(this) {};
}
(new new Proxy(f, {get: f}))();
