load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2016 The V8 Project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.2.1
esid: sec-number.epsilon
description: >
  "EPSILON" property of Number
info: >
  20.1.2.1 Number.EPSILON

  The value of Number.EPSILON is the difference between 1 and the smallest value
  greater than 1 that is representable as a Number value, which is approximately
  2.2204460492503130808472633361816 x 10-16.

  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

assert(
  Number.EPSILON > 0,
  "value is greater than 0"
);
assert(
  Number.EPSILON < 0.000001,
  "value is smaller than 0.000001"
);

verifyNotEnumerable(Number, "EPSILON");
verifyNotWritable(Number, "EPSILON");
verifyNotConfigurable(Number, "EPSILON");
