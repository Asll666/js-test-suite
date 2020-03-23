load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-8-b-2
description: >
    Array.prototype.reduce - modifications to length don't change
    number of iterations in step 9
---*/

        function callbackfn(prevVal, curVal, idx, obj) {
            return idx;
        }

        var obj = { 3: 12, 4: 9, length: 4 };

        Object.defineProperty(obj, "2", {
            get: function () {
                obj.length = 10;
                return 11;
            },
            configurable: true
        });

assert.sameValue(Array.prototype.reduce.call(obj, callbackfn), 3, 'Array.prototype.reduce.call(obj, callbackfn)');