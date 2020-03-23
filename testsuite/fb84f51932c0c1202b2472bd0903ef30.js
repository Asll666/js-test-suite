load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.some
description: >
  The callbackfn return does not change the instance
info: >
  22.2.3.25 %TypedArray%.prototype.some ( callbackfn [ , thisArg ] )

  %TypedArray%.prototype.some is a distinct function that implements the same
  algorithm as Array.prototype.some as defined in 22.1.3.24 except that the this
  object's [[ArrayLength]] internal slot is accessed in place of performing a
  [[Get]] of "length".

  22.1.3.24 Array.prototype.some ( callbackfn [ , thisArg ] )

  ...
  6. Repeat, while k < len
    ..
    c. If kPresent is true, then
      i. Let kValue be ? Get(O, Pk).
      ii. Let testResult be ToBoolean(? Call(callbackfn, T, « kValue, k, O »)).
  ...
includes: [testTypedArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([40, 41, 42]);

  sample.some(function() {
    return 0;
  });

  assert.sameValue(sample[0], 40, "[0] == 40");
  assert.sameValue(sample[1], 41, "[1] == 41");
  assert.sameValue(sample[2], 42, "[2] == 42");
});
