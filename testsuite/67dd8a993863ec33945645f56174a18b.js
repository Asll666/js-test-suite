load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 The V8 Project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.2.3
esid: sec-number.isinteger
description: >
  Return false if argument is not Number
info: |
  Number.isInteger ( number )

  1. If Type(number) is not Number, return false.
  [...]
features: [Symbol]
---*/

assert.sameValue(Number.isInteger("1"), false, "string");
assert.sameValue(Number.isInteger([1]), false, "[1]");
assert.sameValue(Number.isInteger(new Number(42)), false, "Number object");
assert.sameValue(Number.isInteger(false), false, "false");
assert.sameValue(Number.isInteger(true), false, "true");
assert.sameValue(Number.isInteger(undefined), false, "undefined");
assert.sameValue(Number.isInteger(null), false, "null");
assert.sameValue(Number.isInteger(Symbol("1")), false, "symbol");
assert.sameValue(Number.isInteger(), false, "no arg");
