load("201224b0d1c296b45befd2285e95dd42.js");
setJitCompilerOption("baseline.warmup.trigger", 0);
var arr = new Uint8ClampedArray(1);
for (var i = 0; i < 2; ++i)
    arr[0] = 4294967296;
assertEq(arr[0], 255);
