load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-5-27
description: >
    Array.prototype.lastIndexOf - side effects produced by step 3 are
    visible when an exception occurs
---*/

        var stepThreeOccurs = false;
        var stepFiveOccurs = false;

        var obj = {};

        Object.defineProperty(obj, "length", {
            get: function () {
                return {
                    valueOf: function () {
                        stepThreeOccurs = true;
                        if (stepFiveOccurs) {
                            throw new Error("Step 5 occurred out of order");
                        }
                        return 20;
                    }
                };
            },
            configurable: true
        });

        var fromIndex = {
            valueOf: function () {
                stepFiveOccurs = true;
                return 0;
            }
        };

            Array.prototype.lastIndexOf.call(obj, undefined, fromIndex);

assert(stepThreeOccurs, 'stepThreeOccurs !== true');
assert(stepFiveOccurs, 'stepFiveOccurs !== true');
