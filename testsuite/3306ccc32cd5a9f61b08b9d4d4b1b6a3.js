load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-integer-indexed-exotic-objects-getownproperty-p
description: |
  Returns an ordinary property value if numeric key is not a
  CanonicalNumericIndex
info: >
  9.4.5.1 [[GetOwnProperty]] ( P )

  ...
  3. If Type(P) is String, then
    a. Let numericIndex be ! CanonicalNumericIndexString(P).
    b. If numericIndex is not undefined, then
      ...
  4. Return OrdinaryGetOwnProperty(O, P).
  ...
includes: [testTypedArray.js]
---*/

var keys = [
  "1.0",
  "+1",
  "1000000000000000000000",
  "0.0000001"
];

testWithTypedArrayConstructors(function(TA) {
  keys.forEach(function(key) {
    var sample = new TA([42, 43]);

    assert.sameValue(
      Object.getOwnPropertyDescriptor(sample, key),
      undefined,
      "undefined property [" + key + "]"
    );

    // Tests for the property descriptor are defined on the tests for
    // [[DefineOwnProperty]] calls
    Object.defineProperty(sample, key, {value: "bar"});
    assert.sameValue(
      Object.getOwnPropertyDescriptor(sample, key).value,
      "bar",
      "return value from a ordinary property key [" + key + "]"
    );
  });
});
