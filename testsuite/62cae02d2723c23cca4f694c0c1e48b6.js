load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-7-b-11
description: >
    Array.prototype.every - deleting property of prototype causes
    prototype index property not to be visited on an Array
---*/

        var accessed = false;
        function callbackfn(val, idx, obj) {
            accessed = true;
            return idx !== 1;
        }
        var arr = [0, , 2];

        Object.defineProperty(arr, "0", {
            get: function () {
                delete Array.prototype[1];
                return 0;
            },
            configurable: true
        });

            Array.prototype[1] = 1;

assert(arr.every(callbackfn), 'arr.every(callbackfn) !== true');
assert(accessed, 'accessed !== true');
