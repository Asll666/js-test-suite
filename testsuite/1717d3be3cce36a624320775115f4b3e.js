load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-8-b-iii-1-12
description: >
    Array.prototype.reduceRight - element to be retrieved is own
    accessor property that overrides an inherited data property on an
    Array
---*/

        var testResult = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (prevVal === "20");
            }
        }

            Array.prototype[2] = 2;
            var arr = [0, 1];

            Object.defineProperty(arr, "2", {
                get: function () {
                    return "20";
                },
                configurable: true
            });

            arr.reduceRight(callbackfn);

assert(testResult, 'testResult !== true');
