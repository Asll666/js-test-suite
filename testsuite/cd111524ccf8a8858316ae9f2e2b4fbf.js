load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-string.prototype.charcodeat
es6id: 21.1.3.2
description: The "this" value must be object-coercible
info: |
  1. Let O be ? RequireObjectCoercible(this value).
---*/

var charCodeAt = String.prototype.charCodeAt;

assert.sameValue(typeof charCodeAt, 'function');

assert.throws(TypeError, function() {
  charCodeAt.call(undefined, 0);
}, 'undefined');

assert.throws(TypeError, function() {
  charCodeAt.call(null, 0);
}, 'null');
