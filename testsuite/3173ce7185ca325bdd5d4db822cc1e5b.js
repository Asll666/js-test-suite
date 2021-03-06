load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.3.9
description: >
  Predicate is only called if this.length is > 0.
info: >
  22.1.3.9 Array.prototype.findIndex ( predicate[ , thisArg ] )

  ...
  7. Let k be 0.
  8. Repeat, while k < len
    ...
    d. Let testResult be ToBoolean(Call(predicate, T, «kValue, k, O»)).
  ...
  9. Return -1.
---*/

var called = false;

var predicate = function() {
  called = true;
  return true;
};

var result = [].findIndex(predicate);

assert.sameValue(
  called, false,
  '[].findIndex(predicate) does not call predicate'
);
assert.sameValue(
  result, -1,
  '[].findIndex(predicate) returned undefined'
);
