load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-354-4
description: >
    Object.defineProperty will update [[Value]] attribute successfully
    when [[Configurable]] attribute is true and [[Writable]] attribute
    is false, 'O' is the global object (8.12.9 - step Note)
includes: [propertyHelper.js]
---*/


var obj = this;

try {
    Object.defineProperty(obj, "property", {
        value: 1001,
        writable: false,
        configurable: true
    });

    Object.defineProperty(obj, "property", {
        value: 1002
    });

    verifyEqualTo(obj, "property", 1002);

    verifyNotWritable(obj, "property");

    verifyNotEnumerable(obj, "property");

    verifyConfigurable(obj, "property");
} finally {
    delete obj.property;
}

