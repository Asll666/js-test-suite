load("201224b0d1c296b45befd2285e95dd42.js");
assertEq((('-r', function (s) {
    function C(i) {
        this.m = function () { return i * t; }
    }
    var t = s;
    var a = [];
    for (var i = 0; i < 5; i++)
        a[a.length] = new C(i);
    return a;
})(42))[4].m(), 168);