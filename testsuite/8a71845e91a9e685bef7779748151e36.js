load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.includes
description: Get "length" uses internal ArrayLength
info: >
  22.2.3.13 %TypedArray%.prototype.includes ( searchElement [ , fromIndex ] )

  %TypedArray%.prototype.includes is a distinct function that implements the
  same algorithm as Array.prototype.includes as defined in 22.1.3.11 except that
  the this object's [[ArrayLength]] internal slot is accessed in place of
  performing a [[Get]] of "length".

  22.1.3.11 Array.prototype.includes ( searchElement [ , fromIndex ] )

  ...
  2. Let len be ? ToLength(? Get(O, "length")).
  ...
includes: [testTypedArray.js]
---*/

Object.defineProperty(TypedArray.prototype, "length", {value: 0});

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([7]);

  Object.defineProperty(TA.prototype, "length", {value: 0});
  Object.defineProperty(sample, "length", {value: 0});

  assert.sameValue(sample.includes(7), true);
});
