load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.3.8
description: >
  Return abrupt from ToObject(this value).
info: >
  22.1.3.8 Array.prototype.find ( predicate[ , thisArg ] )

  1. Let O be ToObject(this value).
  2. ReturnIfAbrupt(O).
---*/

// predicate fn is given to avoid false positives
assert.throws(TypeError, function() {
  Array.prototype.find.call(undefined, function() {});
});

assert.throws(TypeError, function() {
  Array.prototype.find.call(null, function() {});
});