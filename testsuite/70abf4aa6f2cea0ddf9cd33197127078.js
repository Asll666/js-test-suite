load("201224b0d1c296b45befd2285e95dd42.js");
var lfLogBuffer = `
  gczeal(14);
  enableGeckoProfiling();
  gczeal(15,3);
  var s = "";
  for (let i = 0; i != 30; i+=2) {}
  readGeckoProfilingStack(s, "c0d1c0d1c0d1c0d1c0d1c0d1c0d1c0");
`;
loadFile(lfLogBuffer);
function loadFile(lfVarx) {
  evaluate(lfVarx);
}
