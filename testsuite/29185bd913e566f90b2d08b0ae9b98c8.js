load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-2-11
description: >
    Array.prototype.every applied to Array-like object, 'length' is an
    own accessor property without a get function
---*/

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return val > 10;
        }

        var obj = {
            0: 9,
            1: 8
        };
        Object.defineProperty(obj, "length", {
            set: function () { },
            configurable: true
        });

assert(Array.prototype.every.call(obj, callbackfn), 'Array.prototype.every.call(obj, callbackfn) !== true');
assert.sameValue(accessed, false, 'accessed');