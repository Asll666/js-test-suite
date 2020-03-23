load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-8-b-iii-1-19
description: >
    Array.prototype.reduceRight - element to be retrieved is own
    accessor property without a get function that overrides an
    inherited accessor property on an Array-like object
---*/

        var testResult = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (typeof prevVal === "undefined");
            }
        }

            Object.prototype[2] = 2;

            var obj = { 0: 0, 1: 1, length: 3 };
            Object.defineProperty(obj, "2", {
                set: function () { },
                configurable: true
            });

            Array.prototype.reduceRight.call(obj, callbackfn);

assert(testResult, 'testResult !== true');
