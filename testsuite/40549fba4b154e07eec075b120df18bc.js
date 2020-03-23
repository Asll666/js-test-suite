load("201224b0d1c296b45befd2285e95dd42.js");
// Debugger.Object.prototype.isArrowFunction recognizes arrow functions.

var g = newGlobal();
var dbg = new Debugger;
var gDO = dbg.addDebuggee(g);
var hits = 0;

function checkIsArrow(shouldBe, expr) {
  print(expr);
  assertEq(gDO.executeInGlobal(expr).return.isArrowFunction, shouldBe);
}

checkIsArrow(true, '() => { }');
checkIsArrow(true, '(a) => { bleh; }');
checkIsArrow(false, 'Object.getPrototypeOf(() => { })');
checkIsArrow(false, '(function () { })');
checkIsArrow(false, 'function f() { } f');
checkIsArrow((void 0), '({})');
checkIsArrow(false, 'Math.atan2');
checkIsArrow(false, 'Function.prototype');
checkIsArrow(false, 'Function("")');
checkIsArrow(false, 'new Function("")');