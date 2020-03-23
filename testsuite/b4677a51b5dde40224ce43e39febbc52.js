load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-8-b-iii-1-32
description: >
    Array.prototype.reduce - exception in getter terminates iteration
    on an Array-like object
---*/

        var accessed = false;
        var testResult = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx >= 1) {
                accessed = true;
                testResult = (prevVal === 0);
            }
        }

        var obj = { 2: 2, 1: 1, length: 3 };
        Object.defineProperty(obj, "0", {
            get: function () {
                throw new RangeError("unhandle exception happened in getter");
            },
            configurable: true
        });
assert.throws(RangeError, function() {
            Array.prototype.reduce.call(obj, callbackfn);
});
assert.sameValue(accessed, false, 'accessed');
assert.sameValue(testResult, false, 'testResult');
