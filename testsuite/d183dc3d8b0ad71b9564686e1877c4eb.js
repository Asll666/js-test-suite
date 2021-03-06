load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-175
description: >
    Object.defineProperties - value of 'writable' property of
    'descObj' is non-empty string (8.10.5 step 6.b)
---*/

        var obj = {};

        Object.defineProperties(obj, {
            property: {
                writable: "abc"
            }
        });

        obj.property = "isWritable";

assert.sameValue(obj.property, "isWritable", 'obj.property');
