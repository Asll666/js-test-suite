load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.3.4
description: >
  Return abrupt from ToObject(this value).
info: >
  22.1.3.4 Array.prototype.entries ( )

  1. Let O be ToObject(this value).
  2. ReturnIfAbrupt(O).
---*/

assert.throws(TypeError, function() {
  Array.prototype.entries.call(undefined);
});

assert.throws(TypeError, function() {
  Array.prototype.entries.call(null);
});
