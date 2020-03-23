load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-57
description: >
    Object.defineProperty - value of 'enumerable' property in
    'Attributes' is a non-empty string (8.10.5 step 3.b)
---*/

        var obj = {};
        var accessed = false;

        Object.defineProperty(obj, "property", { enumerable: "AB\n\\cd" });

        for (var prop in obj) {
            if (prop === "property") {
                accessed = true;
            }
        }

assert(accessed, 'accessed !== true');
