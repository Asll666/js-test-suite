load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-b-18
description: >
    Array.prototype.reduceRight - properties added into own object are
    visited on an Array
---*/

        var testResult = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1 && curVal === 1) {
                testResult = true;
            }
        }

        var arr = [0, , 2];

        Object.defineProperty(arr, "2", {
            get: function () {
                Object.defineProperty(arr, "1", {
                    get: function () {
                        return 1;
                    },
                    configurable: true
                });
                return 0;
            },
            configurable: true
        });

        arr.reduceRight(callbackfn, "initialValue");

assert(testResult, 'testResult !== true');