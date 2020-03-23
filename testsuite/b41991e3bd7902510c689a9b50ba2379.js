load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-9
description: >
    Array.prototype.reduceRight - modifications to length will change
    number of iterations
---*/

        var called = 0;
        function callbackfn(preVal, val, idx, obj) {
            called++;
        }

        var arr = [0, 1, 2, 3];
        Object.defineProperty(arr, "4", {
            get: function () {
                arr.length = 2;
            },
            configurable: true
        });

        arr.reduceRight(callbackfn, "initialValue");

assert.sameValue(called, 3, 'called');