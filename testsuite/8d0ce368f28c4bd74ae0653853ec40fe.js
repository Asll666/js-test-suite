load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| exitstatus: 6;

setJitCompilerOption('ion.interrupt-without-signals', 1);
timeout(1);
for(;;);
