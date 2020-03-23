load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-additional-properties-of-the-object.prototype-object
description: Behavior when "this" value is not Object-coercible
info: |
    1. Let O be ? ToObject(this value).
---*/

var __lookupGetter__ = Object.prototype.__lookupGetter__;
var toStringCount = 0;
var key = {
  toString: function() {
    toStringCount += 1;
  }
};

assert.sameValue(typeof __lookupGetter__, 'function');

assert.throws(TypeError, function() {
  __lookupGetter__.call(undefined, key);
}, 'undefined');

assert.throws(TypeError, function() {
  __lookupGetter__.call(null, key);
}, 'null');

assert.sameValue(toStringCount, 0);
