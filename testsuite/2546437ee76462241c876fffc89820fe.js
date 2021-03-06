load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-string.prototype.concat
es6id: 21.1.3.4
description: The "this" value must be object-coercible
info: |
  1. Let O be ? RequireObjectCoercible(this value).
---*/

var concat = String.prototype.concat;

assert.sameValue(typeof concat, 'function');

assert.throws(TypeError, function() {
  concat.call(undefined, '');
}, 'undefined');

assert.throws(TypeError, function() {
  concat.call(null, '');
}, 'null');
