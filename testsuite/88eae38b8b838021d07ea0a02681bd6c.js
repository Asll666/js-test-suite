load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 22.2.5.2
description: >
  The initial value of Uint32Array.prototype is the Uint32Array prototype object.
info: >
  The initial value of TypedArray.prototype is the corresponding TypedArray prototype intrinsic object (22.2.6).

  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

assert.sameValue(Uint32Array.prototype, Object.getPrototypeOf(new Uint32Array(0)));

verifyNotEnumerable(Uint32Array, "prototype");
verifyNotWritable(Uint32Array, "prototype");
verifyNotConfigurable(Uint32Array, "prototype");
