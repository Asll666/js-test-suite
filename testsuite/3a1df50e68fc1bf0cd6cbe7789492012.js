load("201224b0d1c296b45befd2285e95dd42.js");

setJitCompilerOption("ion.warmup.trigger", 30);
function bar(i) {
  if (i >= 40)
    return;
  if ("aaa,bbb,ccc".split(",")[0].length != 3)
    throw "???";
  bar(i + 1);
}
bar(0);
