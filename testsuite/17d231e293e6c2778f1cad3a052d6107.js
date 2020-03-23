load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.1.3.6
description: >
  Throws a TypeError if `this` object does not have a [[MapData]] internal slot.
info: >
  Map.prototype.get ( key )

  ...
  3. If M does not have a [[MapData]] internal slot, throw a TypeError
  exception.
  ...
---*/

var m = new Map();

assert.throws(TypeError, function() {
  Map.prototype.get.call([], 1);
});

assert.throws(TypeError, function() {
  m.get.call([], 1);
});

assert.throws(TypeError, function() {
  Map.prototype.get.call({}, 1);
});

assert.throws(TypeError, function() {
  m.get.call({}, 1);
});
