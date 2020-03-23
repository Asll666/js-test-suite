load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 The V8 Project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-isfinite-number
es6id: 18.2.2
description: >
  number argument is converted by ToNumber
info: |
  isFinite (number)

  1. Let num be ? ToNumber(number).
  2. If num is NaN, +∞, or -∞, return false.
  3. Otherwise, return true.
---*/

assert.sameValue(isFinite("0"), true, "'0'");
assert.sameValue(isFinite(""), true, "the empty string");
assert.sameValue(isFinite("Infinity"), false, "'Infinity'");
assert.sameValue(isFinite("this is not a number"), false, "string");
assert.sameValue(isFinite(true), true, "true");
assert.sameValue(isFinite(false), true, "false");
assert.sameValue(isFinite([1]), true, "Object [1]");
assert.sameValue(isFinite([Infinity]), false, "Object [Infinity]");
assert.sameValue(isFinite([NaN]), false, "Object [NaN]");
assert.sameValue(isFinite(null), true, "null");
assert.sameValue(isFinite(undefined), false, "undefined");
assert.sameValue(isFinite(), false, "no arg");