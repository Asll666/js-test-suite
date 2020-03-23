load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-221
description: >
    Object.create - 'writable' property of one property in
    'Properties' is the Math object (8.10.5 step 6.b)
---*/

        var newObj = Object.create({}, {
            prop: {
                writable: Math
            }
        });
        var hasProperty = newObj.hasOwnProperty("prop");

        newObj.prop = 121;

assert(hasProperty, 'hasProperty !== true');
assert.sameValue(newObj.prop, 121, 'newObj.prop');