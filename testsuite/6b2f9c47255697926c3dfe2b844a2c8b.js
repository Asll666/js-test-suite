load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.3.13
description: >
  The method should return an Iterator instance.
info: >
  22.1.3.13 Array.prototype.keys ( )

  1. Let O be ToObject(this value).
  2. ReturnIfAbrupt(O).
  3. Return CreateArrayIterator(O, "key").

  22.1.5.1 CreateArrayIterator Abstract Operation

  ...
  2. Let iterator be ObjectCreate(%ArrayIteratorPrototype%, «‍[[IteratedObject]],
  [[ArrayIteratorNextIndex]], [[ArrayIterationKind]]»).
  ...
  6. Return iterator.
features: [Symbol.iterator]
---*/

var ArrayIteratorProto = Object.getPrototypeOf([][Symbol.iterator]());
var iter = [].keys();

assert.sameValue(
  Object.getPrototypeOf(iter), ArrayIteratorProto,
  'The prototype of [].keys() is %ArrayIteratorPrototype%'
);