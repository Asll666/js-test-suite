load("201224b0d1c296b45befd2285e95dd42.js");
const g1 = newGlobal({});
const g2 = newGlobal(newGlobal);
g1.g2obj = g2.eval("new Object");
g1.evaluate(`
  const global = this;
  function capture(shouldIgnoreSelfHosted = true) {
    return captureFirstSubsumedFrame(global.g2obj, shouldIgnoreSelfHosted);
  }
  (function iife1() {
    const captureTrueStack = capture(true);
  }());
`, {
});
