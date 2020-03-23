load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 24.1.3.3
description: >
  ArrayBuffer[Symbol.species] accessor property get name
info: >
  24.1.3.3 get ArrayBuffer [ @@species ]

  ...
  The value of the name property of this function is "get [Symbol.species]".
features: [Symbol.species]
includes: [propertyHelper.js]
---*/

var descriptor = Object.getOwnPropertyDescriptor(ArrayBuffer, Symbol.species);

assert.sameValue(
  descriptor.get.name,
  'get [Symbol.species]'
);

verifyNotEnumerable(descriptor.get, 'name');
verifyNotWritable(descriptor.get, 'name');
verifyConfigurable(descriptor.get, 'name');