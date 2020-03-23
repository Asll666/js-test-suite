load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 The V8 Project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-isnan-number
es6id: 18.2.3
description: >
  Throws a TypeError if the result of calling number.@@toPrimitive is a symbol
info: |
  isNaN (number)

  1. Let num be ? ToNumber(number).

  ToNumber ( argument )

  1. Let primValue be ? ToPrimitive(argument, hint Number).
  2. Return ? ToNumber(primValue).

  ToPrimitive ( input [ , PreferredType ] )

  [...]
  4. Let exoticToPrim be ? GetMethod(input, @@toPrimitive).
  5. If exoticToPrim is not undefined, then
    a. Let result be ? Call(exoticToPrim, input, « hint »).
    b. If Type(result) is not Object, return result.
features: [Symbol.toPrimitive]
---*/

var obj = {};
obj[Symbol.toPrimitive] = function() {
  return Symbol.toPrimitive;
};

assert.throws(TypeError, function() {
  isNaN(obj);
});
