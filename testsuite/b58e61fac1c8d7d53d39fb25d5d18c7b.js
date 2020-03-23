load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: The `this` value must be an object
es6id: 21.2.5.11
info: >
    1. Let rx be the this value.
    2. If Type(rx) is not Object, throw a TypeError exception.
features: [Symbol.split]
---*/

assert.throws(TypeError, function() {
  RegExp.prototype[Symbol.split].call();
});

assert.throws(TypeError, function() {
  RegExp.prototype[Symbol.split].call(undefined);
});

assert.throws(TypeError, function() {
  RegExp.prototype[Symbol.split].call(null);
});

assert.throws(TypeError, function() {
  RegExp.prototype[Symbol.split].call(true);
});

assert.throws(TypeError, function() {
  RegExp.prototype[Symbol.split].call('string');
});

assert.throws(TypeError, function() {
  RegExp.prototype[Symbol.split].call(Symbol.split);
});

assert.throws(TypeError, function() {
  RegExp.prototype[Symbol.split].call(86);
});