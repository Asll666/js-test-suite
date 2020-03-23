load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-7-b-13
description: >
    Array.prototype.forEach - deleting own property with prototype
    property causes prototype index property to be visited on an Array
---*/

        var testResult = false;

        function callbackfn(val, idx, obj) {
            if (idx === 1 && val === 1) {
                testResult = true;
            }
        }
        var arr = [0, 111];

        Object.defineProperty(arr, "0", {
            get: function () {
                delete arr[1];
                return 0;
            },
            configurable: true
        });

            Array.prototype[1] = 1;
            arr.forEach(callbackfn);

assert(testResult, 'testResult !== true');
