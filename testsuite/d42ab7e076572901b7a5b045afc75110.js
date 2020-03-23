load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-196
description: >
    Object.create - one property in 'Properties' is the Math object
    that uses Object's [[Get]] method to access the 'writable'
    property (8.10.5 step 6.a)
---*/

            Math.writable = true;

            var newObj = Object.create({}, {
                prop: Math
            });

            var beforeWrite = (newObj.hasOwnProperty("prop") && typeof (newObj.prop) === "undefined");

            newObj.prop = "isWritable";

            var afterWrite = (newObj.prop === "isWritable");

assert.sameValue(beforeWrite, true, 'beforeWrite');
assert.sameValue(afterWrite, true, 'afterWrite');
