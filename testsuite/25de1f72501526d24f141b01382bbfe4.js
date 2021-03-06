load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-354-15
description: >
    Object.defineProperty - Named property 'P' with attributes
    [[Writable]]: false, [[Enumerable]]: true, [[Configurable]]: true
    is non-writable using simple assignment, 'A' is an Array object
includes: [propertyHelper.js]
---*/

var obj = [];

Object.defineProperty(obj, "prop", {
    value: 2010,
    writable: false,
    enumerable: true,
    configurable: true
});

assert.sameValue(obj.prop, 2010);
verifyNotWritable(obj, "prop");

