load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 21.1.3.6
description: >
  Returns abrupt from ToString(searchString)
info: >
  21.1.3.6 String.prototype.endsWith ( searchString [ , endPosition] )

  ...
  7. Let searchStr be ToString(searchString).
  8. ReturnIfAbrupt(searchStr).
  ...
---*/

var obj = {
  toString: function() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  ''.endsWith(obj);
});
