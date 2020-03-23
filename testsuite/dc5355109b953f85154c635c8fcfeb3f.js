load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-8-b-2
description: >
    Array.prototype.reduceRight - modifications to length don't change
    number of iterations in step 9
---*/

        var called = 0;
        function callbackfn(prevVal, curVal, idx, obj) {
            called++;
            return prevVal + curVal;
        }

        var arr = [0, 1, 2, 3];
        Object.defineProperty(arr, "4", {
            get: function () {
                arr.length = 2;
                return 10;
            },
            configurable: true
        });

        var preVal = arr.reduceRight(callbackfn);

assert.sameValue(preVal, 11, 'preVal');
assert.sameValue(called, 2, 'called');
