load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 26.1.3
description: >
  Return abrupt from ToPropertyKey(propertyKey)
info: >
  26.1.3 Reflect.defineProperty ( target, propertyKey, attributes )

  ...
  2. Let key be ToPropertyKey(propertyKey).
  3. ReturnIfAbrupt(key).
  ...
---*/

var p = {
  toString: function() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  Reflect.defineProperty({}, p);
});
