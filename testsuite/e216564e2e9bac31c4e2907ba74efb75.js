load("201224b0d1c296b45befd2285e95dd42.js");

for (var i = 0; i < 2; i++) {
    setJitCompilerOption("ion.warmup.trigger", 8)
    function f(state) {
        this.s = state
    }
    f.prototype.g = function(v, y) {
        this.t
    }
    x = ['', '']
    j = new f(false)
    x.filter(j.g, j)
    x.filter(j.g, new f(false))
    j.__proto__ = {}
}
