load("201224b0d1c296b45befd2285e95dd42.js");
// All iterators of the same collection type share their immediate prototype.
// Those prototype objects in turn inherit directly from %IteratorPrototype%.

load("e2c808509c360663d6364e14c187fc8f.js");

// Get %IteratorPrototype%.
var iterProto = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));

function test(obj0, obj1) {
    var iter0 = obj0[Symbol.iterator](), iter1 = obj1[Symbol.iterator]();
    var proto = Object.getPrototypeOf(iter0);
    assertEq(Object.getPrototypeOf(iter1), proto);
    assertEq(Object.getPrototypeOf(proto), iterProto);
}

test([], [1]);
test(new Map(), new Map([[1, 1]]));
test(new Set(), new Set([1]));
