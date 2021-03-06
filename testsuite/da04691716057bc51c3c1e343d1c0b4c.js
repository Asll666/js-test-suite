load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-2-11
description: >
    Array.prototype.map - applied to Array-like object when 'length'
    is an own accessor property without a get function
---*/

        function callbackfn(val, idx, obj) {
            return val > 10;
        }

        var obj = {
            0: 11,
            1: 12
        };
        Object.defineProperty(obj, "length", {
            set: function () { },
            configurable: true
        });

        var testResult = Array.prototype.map.call(obj, callbackfn);

assert.sameValue(testResult.length, 0, 'testResult.length');
