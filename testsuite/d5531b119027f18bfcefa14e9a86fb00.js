load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.1.3.10
description: >
  Property type and descriptor.
info: >
  get Map.prototype.size

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

var descriptor = Object.getOwnPropertyDescriptor(Map.prototype, 'size');

assert.sameValue(
  typeof descriptor.get,
  'function',
  'typeof descriptor.get is function'
);
assert.sameValue(
  typeof descriptor.set,
  'undefined',
  'typeof descriptor.set is undefined'
);

verifyNotEnumerable(Map.prototype, 'size');
verifyConfigurable(Map.prototype, 'size');
