load("201224b0d1c296b45befd2285e95dd42.js");
// Map methods throw when passed a this-value that isn't a Map.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function testcase(obj, fn) {
    assertEq(typeof fn, "function");
    var args = Array.slice(arguments, 2);
    assertThrowsInstanceOf(function () { fn.apply(obj, args); }, TypeError);
}

var Map_size_getter = Object.getOwnPropertyDescriptor(Map.prototype, "size").get;

function test(obj) {
    testcase(obj, Map.prototype.get, "x");
    testcase(obj, Map.prototype.has, "x");
    testcase(obj, Map.prototype.set, "x", 1);
    testcase(obj, Map.prototype.delete, "x");
    testcase(obj, Map.prototype.clear);
    testcase(obj, Map.prototype.keys);
    testcase(obj, Map.prototype.values);
    testcase(obj, Map.prototype.entries);
    testcase(obj, Map_size_getter);
}

test(Map.prototype);
test(Object.create(new Map));
test(new Set());
test({});
test(null);
test(undefined);
