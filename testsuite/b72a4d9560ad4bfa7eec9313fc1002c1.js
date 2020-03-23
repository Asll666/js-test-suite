load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 21.2.5.11
description: RegExp.prototype[Symbol.split] `length` property
info: >
    The length property of the @@split method is 2.

    ES6 Section 17:

    [...]

    Unless otherwise specified, the length property of a built-in Function
    object has the attributes { [[Writable]]: false, [[Enumerable]]: false,
    [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

assert.sameValue(RegExp.prototype[Symbol.split].length, 2);

verifyNotEnumerable(RegExp.prototype[Symbol.split], 'length');
verifyNotWritable(RegExp.prototype[Symbol.split], 'length');
verifyConfigurable(RegExp.prototype[Symbol.split], 'length');
