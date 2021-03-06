load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.3.6
description: >
  Return abrupt from ToInteger(start).
info: >
  22.1.3.6 Array.prototype.fill (value [ , start [ , end ] ] )

  ...
  5. Let relativeStart be ToInteger(start).
  6. ReturnIfAbrupt(relativeStart).
  ...
---*/

var start = {
  valueOf: function() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  [].fill(1, start);
});
