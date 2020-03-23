load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.14
esid: sec-%typedarray%.prototype.includes
description: Throws a TypeError exception when `this` is not Object
info: >
  22.2.3.14 %TypedArray%.prototype.includes ( searchElement [ , fromIndex ] )

  This function is not generic. ValidateTypedArray is applied to the this value
  prior to evaluating the algorithm. If its result is an abrupt completion that
  exception is thrown instead of evaluating the algorithm.

  22.2.3.5.1 Runtime Semantics: ValidateTypedArray ( O )

  1. If Type(O) is not Object, throw a TypeError exception.
  ...
includes: [testTypedArray.js]
features: [Symbol]
---*/

var includes = TypedArray.prototype.includes;

assert.throws(TypeError, function() {
  includes.call(undefined, 42);
}, "this is undefined");

assert.throws(TypeError, function() {
  includes.call(null, 42);
}, "this is null");

assert.throws(TypeError, function() {
  includes.call(42, 42);
}, "this is 42");

assert.throws(TypeError, function() {
  includes.call("1", 42);
}, "this is a string");

assert.throws(TypeError, function() {
  includes.call(true, 42);
}, "this is true");

assert.throws(TypeError, function() {
  includes.call(false, 42);
}, "this is false");

var s = Symbol("s");
assert.throws(TypeError, function() {
  includes.call(s, 42);
}, "this is a Symbol");