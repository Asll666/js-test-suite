load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-2-2
description: Array.prototype.every - 'length' is own data property on an Array
---*/

        function callbackfn1(val, idx, obj) {
            return val > 10;
        }

        function callbackfn2(val, idx, obj) {
            return val > 11;
        }

            Array.prototype[2] = 9;

assert([12, 11].every(callbackfn1), '[12, 11].every(callbackfn1) !== true');
assert.sameValue([12, 11].every(callbackfn2), false, '[12, 11].every(callbackfn2)');
