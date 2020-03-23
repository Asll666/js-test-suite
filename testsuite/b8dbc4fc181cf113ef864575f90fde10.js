load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-date.prototype.setminutes
es6id: 20.3.4.24
description: Abrupt completion during type coercion of provided "min"
info: |
  1. Let t be LocalTime(? thisTimeValue(this value)).
  2. Let m be ? ToNumber(min).
---*/

var date = new Date();
var callCount = 0;
var originalValue = date.getTime();
var obj = {
  valueOf: function() {
    throw new Test262Error();
  }
};
var counter = {
  valueOf: function() {
    callCount += 1;
  }
};

assert.throws(Test262Error, function() {
  date.setMinutes(obj, counter, counter);
});

assert.sameValue(date.getTime(), originalValue);
assert.sameValue(callCount, 0);
