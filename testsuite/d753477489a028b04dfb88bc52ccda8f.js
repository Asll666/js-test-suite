load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.3.16
esid: sec-array.prototype.map
description: Abrupt completion from creating a new array
info: |
    [...]
    5. Let A be ? ArraySpeciesCreate(O, len).
    [...]

    9.4.2.3 ArraySpeciesCreate

    [...]
    3. Let isArray be ? IsArray(originalArray).
    4. If isArray is false, return ? ArrayCreate(length).

    9.4.2.2 ArrayCreate

    [...]
    3. If length>232-1, throw a RangeError exception.
---*/

var callCount = 0;
var obj = { length: Math.pow(2, 32) };
var cb = function() {
  callCount += 1;
};

assert.throws(RangeError, function() {
  Array.prototype.map.call(obj, cb);
});

assert.sameValue(
  callCount,
  0,
  'RangeError thrown during array creation, not property modification'
);
