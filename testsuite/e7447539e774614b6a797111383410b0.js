load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-a-19
description: >
    Array.prototype.lastIndexOf -  decreasing length of array does not
    delete non-configurable properties
flags: [noStrict]
---*/

        var arr = [0, 1, 2, 3];

        Object.defineProperty(arr, "2", {
            get: function () {
                return "unconfigurable";
            },
            configurable: false
        });

        Object.defineProperty(arr, "3", {
            get: function () {
                arr.length = 2;
                return 1;
            },
            configurable: true
        });

assert.sameValue(arr.lastIndexOf("unconfigurable"), 2, 'arr.lastIndexOf("unconfigurable")');
