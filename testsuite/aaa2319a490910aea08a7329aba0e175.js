load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-8-b-iii-1-28
description: >
    Array.prototype.reduce - applied to String object, which
    implements its own property get method
---*/

        var testResult = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (prevVal === "0");
            }
        }

        var str = new String("012");
        Array.prototype.reduce.call(str, callbackfn);

assert(testResult, 'testResult !== true');
