load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 19.5.6.2.1
description: >
  The initial value of RangeError.prototype is the RangeError prototype object.
info: >
  The initial value of NativeError.prototype is a NativeError prototype object (19.5.6.3).
  Each NativeError constructor has a distinct prototype object.
  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

assert.sameValue(RangeError.prototype, Object.getPrototypeOf(new RangeError));

verifyNotEnumerable(RangeError, "prototype");
verifyNotWritable(RangeError, "prototype");
verifyNotConfigurable(RangeError, "prototype");
