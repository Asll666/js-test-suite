load("201224b0d1c296b45befd2285e95dd42.js");
// The length exceeds INT32_MAX and should be rejected.

if (!this.SharedArrayBuffer)
    quit(0);

var failed = false;
try {
    var sab = new SharedArrayBuffer((2147483648));
}
catch (e) {
    failed = true;
}
assertEq(failed, true);
