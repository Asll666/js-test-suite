load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 26.1.14
description: >
  Reflect.setPrototypeOf.length value and property descriptor
includes: [propertyHelper.js]
---*/

assert.sameValue(
  Reflect.setPrototypeOf.length, 2,
  'The value of `Reflect.setPrototypeOf.length` is `2`'
);

verifyNotEnumerable(Reflect.setPrototypeOf, 'length');
verifyNotWritable(Reflect.setPrototypeOf, 'length');
verifyConfigurable(Reflect.setPrototypeOf, 'length');
