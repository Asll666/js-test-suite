load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-54
description: >
    Object.defineProperties - desc.value and P.value are two Ojbects
    which refer to the different objects (8.12.9 step 6)
includes: [propertyHelper.js]
---*/


var obj = {};

var obj1 = { length: 10 };
obj.foo = obj1; // default value of attributes: writable: true, configurable: true, enumerable: true

var obj2 = { length: 20 };

Object.defineProperties(obj, {
    foo: {
        value: obj2
    }
});
verifyEqualTo(obj, "foo", obj2);

verifyWritable(obj, "foo");

verifyEnumerable(obj, "foo");

verifyConfigurable(obj, "foo");
