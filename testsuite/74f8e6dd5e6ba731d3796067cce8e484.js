load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.4.3.4
description: >
  WeakSet.prototype.has.length value and writability.
info: >
  WeakSet.prototype.has ( value )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(
  WeakSet.prototype.has.length, 1,
  'The value of WeakSet.prototype.has.length is 1'
);

verifyNotEnumerable(WeakSet.prototype.has, 'length');
verifyNotWritable(WeakSet.prototype.has, 'length');
verifyConfigurable(WeakSet.prototype.has, 'length');
