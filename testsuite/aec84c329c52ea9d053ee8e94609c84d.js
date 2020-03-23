load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.2.3
description: >
  Return abrupt from Data Property creation
info: >
  Array.of ( ...items )

  ...
  7. Let k be 0.
  8. Repeat, while k < len
    a. Let kValue be items[k].
    b. Let Pk be ToString(k).
    c. Let defineStatus be CreateDataPropertyOrThrow(A,Pk, kValue).
    d. ReturnIfAbrupt(defineStatus).
  ...

  7.3.6 CreateDataPropertyOrThrow (O, P, V)

  ...
  3. Let success be CreateDataProperty(O, P, V).
  4. ReturnIfAbrupt(success).
  ...
features: [Proxy]
---*/

function T() {
  return new Proxy({}, {
    defineProperty: function() {
      throw new Test262Error();
    }
  });
}

assert.throws(Test262Error, function() {
  Array.of.call(T, 'Bob');
});
