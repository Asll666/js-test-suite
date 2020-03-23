load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-3-6
description: >
    Array.prototype.forEach - value of 'length' is a number (value is
    positive)
---*/

        var testResult1 = false;

        function callbackfn(val, idx, obj) {
            testResult1 = (val > 10);
        }

        var obj = { 1: 11, 2: 9, length: 2 };

        Array.prototype.forEach.call(obj, callbackfn);

assert(testResult1, 'testResult1 !== true');
