load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array-exotic-objects-defineownproperty-p-desc
es6id: 9.4.2.1
description: >
  Error when setting a length larger than 2**32 (honoring the Realm of the
  current execution context)
info: |
  [...]
  2. If P is "length", then
     a. Return ? ArraySetLength(A, Desc).
---*/

var OArray = $.createRealm().global.Array;
var array = new OArray();

assert.throws(RangeError, function() {
  array.length = 4294967296;
});
