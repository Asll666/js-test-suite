load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-9-c-ii-23
description: >
    Array.prototype.reduce - number primitive can be used as
    accumulator
---*/

        var accessed = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return prevVal === 12;
        }

        var obj = { 0: 11, length: 1 };

assert.sameValue(Array.prototype.reduce.call(obj, callbackfn, 12), true, 'Array.prototype.reduce.call(obj, callbackfn, 12)');
assert(accessed, 'accessed !== true');