load("201224b0d1c296b45befd2285e95dd42.js");
// Test superficial features of the Iterator.prototype.next builtin function.

assertEq(Iterator.prototype.next.length, 0);
var desc = Object.getOwnPropertyDescriptor(Iterator.prototype, "next");
assertEq(desc.configurable, true);
assertEq(desc.enumerable, false);
assertEq(desc.writable, true);
