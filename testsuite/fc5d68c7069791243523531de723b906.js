load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-3-2
description: >
    Array.prototype.forEach - value of 'length' is a boolean (value is
    true)
---*/

        var testResult = false;
        function callbackfn(val, idx, obj) {
            testResult = (val > 10);
        }

        var obj = { 0: 11, 1: 9, length: true };

        Array.prototype.forEach.call(obj, callbackfn);

assert(testResult, 'testResult !== true');