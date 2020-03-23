load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-77
description: >
    Object.create - 'enumerable' property of one property in
    'Properties' is +0 (8.10.5 step 3.b)
---*/

        var accessed = false;

        var newObj = Object.create({}, {
            prop: {
                enumerable: +0
            }
        });
        for (var property in newObj) {
            if (property === "prop") {
                accessed = true;
            }
        }

assert.sameValue(accessed, false, 'accessed');
assert(newObj.hasOwnProperty("prop"), 'newObj.hasOwnProperty("prop") !== true');
