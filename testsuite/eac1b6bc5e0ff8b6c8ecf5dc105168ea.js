load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-c-ii-8
description: >
    Array.prototype.filter - element changed by callbackfn on previous
    iterations is observed
---*/

        var obj = { 0: 11, 1: 12, length: 2 };

        function callbackfn(val, idx, o) {
            if (idx === 0) {
                obj[idx + 1] = 8;
            }
            return val > 10;
        }

        var newArr = Array.prototype.filter.call(obj, callbackfn);

assert.sameValue(newArr.length, 1, 'newArr.length');
assert.sameValue(newArr[0], 11, 'newArr[0]');
