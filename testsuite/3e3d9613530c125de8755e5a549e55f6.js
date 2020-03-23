load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.1.5.2.1
description: >
  Throws a TypeError if `this` value is not an Object.
info: >
  From Map.prototype.values()

  %MapIteratorPrototype%.next ( )

  1. Let O be the this value.
  2. If Type(O) is not Object, throw a TypeError exception.
  ...
features:
  - Symbol
  - Symbol.iterator
---*/

var map = new Map([[1, 11], [2, 22]]);
var iterator = map.values();

assert.throws(TypeError, function() {
  iterator.next.call(false);
});

assert.throws(TypeError, function() {
  iterator.next.call(1);
});

assert.throws(TypeError, function() {
  iterator.next.call('');
});

assert.throws(TypeError, function() {
  iterator.next.call(undefined);
});

assert.throws(TypeError, function() {
  iterator.next.call(null);
});

assert.throws(TypeError, function() {
  iterator.next.call(Symbol());
});

// does not throw an Error
iterator.next.call(map[Symbol.iterator]());
