load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-9-b-i-28
description: >
    Array.prototype.indexOf - side-effects are visible in subsequent
    iterations on an Array
---*/

        var preIterVisible = false;
        var arr = [];

        Object.defineProperty(arr, "0", {
            get: function () {
                preIterVisible = true;
                return false;
            },
            configurable: true
        });

        Object.defineProperty(arr, "1", {
            get: function () {
                if (preIterVisible) {
                    return true;
                } else {
                    return false;
                }
            },
            configurable: true
        });

assert.sameValue(arr.indexOf(true), 1, 'arr.indexOf(true)');
