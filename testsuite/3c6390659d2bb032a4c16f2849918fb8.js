load("201224b0d1c296b45befd2285e95dd42.js");
load("789647b4b1873ad4adf74568147f8449.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

if (!isAsmJSCompilationAvailable())
    quit();

setDiscardSource(true)
assertEq(eval(`(function asmModule() { "use asm"; function asmFun() {} return asmFun })`).toString(), "function asmModule() {\n    [sourceless code]\n}");
assertEq(eval(`(function asmModule() { "use asm"; function asmFun() {} return asmFun })`).toSource(), "(function asmModule() {\n    [sourceless code]\n})");
assertEq(eval(`(function asmModule() { "use asm"; function asmFun() {} return asmFun })`)().toString(), "function asmFun() {\n    [sourceless code]\n}");
assertEq(eval(`(function asmModule() { "use asm"; function asmFun() {} return asmFun })`)().toSource(), "function asmFun() {\n    [sourceless code]\n}");
assertEq((evaluate(`function asmModule1() { "use asm"; function asmFun() {} return asmFun }`), asmModule1).toString(), "function asmModule1() {\n    [sourceless code]\n}");
assertEq((evaluate(`function asmModule2() { "use asm"; function asmFun() {} return asmFun }`), asmModule2).toSource(), "function asmModule2() {\n    [sourceless code]\n}");
assertEq((evaluate(`function asmModule3() { "use asm"; function asmFun() {} return asmFun }`), asmModule3)().toString(), "function asmFun() {\n    [sourceless code]\n}");
assertEq((evaluate(`function asmModule4() { "use asm"; function asmFun() {} return asmFun }`), asmModule4)().toSource(), "function asmFun() {\n    [sourceless code]\n}");
assertEq(asmCompile(USE_ASM + `function asmFun() {} return asmFun`).toString(), "function anonymous() {\n    [sourceless code]\n}");
assertEq(asmCompile(USE_ASM + `function asmFun() {} return asmFun`).toSource(), "(function anonymous() {\n    [sourceless code]\n})");
assertEq(asmCompile(USE_ASM + `function asmFun() {} return asmFun`)().toString(), "function asmFun() {\n    [sourceless code]\n}");
assertEq(asmCompile(USE_ASM + `function asmFun() {} return asmFun`)().toSource(), "function asmFun() {\n    [sourceless code]\n}");
assertThrowsInstanceOf(()=>asmCompile('stdlib',USE_ASM + "var sin=stdlib.Math.sin;return {}")({Math:{}}), Error);
