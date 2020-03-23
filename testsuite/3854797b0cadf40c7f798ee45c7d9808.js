load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.3.3
description: >
  Return abrupt from start as a Symbol.
info: >
  22.1.3.3 Array.prototype.copyWithin (target, start [ , end ] )

  ...
  8. Let relativeStart be ToInteger(start).
  9. ReturnIfAbrupt(relativeStart).
  ...
features: [Symbol]
---*/

var s = Symbol(1);
assert.throws(TypeError, function() {
  [].copyWithin(0, s);
});
