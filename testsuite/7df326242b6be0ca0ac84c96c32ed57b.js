load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-b-i-31
description: >
    Array.prototype.lastIndexOf terminates iteration on unhandled
    exception on an Array-like object
---*/

        var accessed = false;
        var obj = { length: 3 };

        Object.defineProperty(obj, "2", {
            get: function () {
                throw new TypeError();
            },
            configurable: true
        });

        Object.defineProperty(obj, "1", {
            get: function () {
                accessed = true;
                return true;
            },
            configurable: true
        });
assert.throws(TypeError, function() {
            Array.prototype.lastIndexOf.call(obj, true);
});
assert.sameValue(accessed, false, 'accessed');
