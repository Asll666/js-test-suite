load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-c-ii-19
description: >
    Array.prototype.reduceRight - value of 'accumulator' used for
    first iteration is the value of max index property which is not
    undefined when 'initialValue' is not present on an Array
---*/

        var arr = [11, 12, 13];
        var testResult = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (prevVal === 13);
            }
            return curVal;
        }
        arr.reduceRight(callbackfn);

assert(testResult, 'testResult !== true');
