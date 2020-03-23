load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-262
description: >
    Object.create - 'get' property of one property in 'Properties' is
    an Array object (8.10.5 step 7.b)
---*/


assert.throws(TypeError, function() {
            Object.create({}, {
                prop: {
                    get: [1, 2, 3]
                }
            });
});
