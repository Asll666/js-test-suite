load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 The V8 Project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.2.5
esid: sec-number.issafeinteger
description: >
  Return false if argument is not Number
info: |
  Number.isSafeInteger ( number )

  1. If Type(number) is not Number, return false.
  [...]
features: [Symbol]
---*/

assert.sameValue(Number.isSafeInteger("1"), false, "string");
assert.sameValue(Number.isSafeInteger([1]), false, "[1]");
assert.sameValue(Number.isSafeInteger(new Number(42)), false, "Number object");
assert.sameValue(Number.isSafeInteger(false), false, "false");
assert.sameValue(Number.isSafeInteger(true), false, "true");
assert.sameValue(Number.isSafeInteger(undefined), false, "undefined");
assert.sameValue(Number.isSafeInteger(null), false, "null");
assert.sameValue(Number.isSafeInteger(Symbol("1")), false, "symbol");
assert.sameValue(Number.isSafeInteger(), false, "no arg");
