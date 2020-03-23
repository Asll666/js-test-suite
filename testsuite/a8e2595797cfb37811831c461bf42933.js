load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.1.3.11
description: >
  Returns an iterator on an empty Map object.
info: >
  Map.prototype.values ()

  ...
  2. Return CreateMapIterator(M, "value").

  23.1.5.1 CreateMapIterator Abstract Operation

  ...
  7. Return iterator.
---*/

var map = new Map();
var iterator = map.values();
var result = iterator.next();

assert.sameValue(
  result.value, undefined,
  'The value of `result.value` is `undefined`'
);
assert.sameValue(result.done, true, 'The value of `result.done` is `true`');
