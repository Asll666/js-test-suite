load("201224b0d1c296b45befd2285e95dd42.js");
const prototypes = [
    Map.prototype,
    Set.prototype,
    WeakMap.prototype,
    WeakSet.prototype,
    Date.prototype,
    Error.prototype,
    InternalError.prototype,
    EvalError.prototype,
    RangeError.prototype,
    ReferenceError.prototype,
    SyntaxError.prototype,
    TypeError.prototype,
    URIError.prototype,
    RegExp.prototype,
];

for (const prototype of prototypes) {
    delete prototype[Symbol.toStringTag];
    assertEq(Object.prototype.toString.call(prototype), "[object Object]");
}
