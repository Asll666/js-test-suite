load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-4-8
description: >
    Array.prototype.map - Side effects produced by step 2 are visible
    when an exception occurs
---*/

        var obj = { 0: 11, 1: 12 };

        var accessed = false;

        Object.defineProperty(obj, "length", {
            get: function () {
                accessed = true;
                return 2;
            },
            configurable: true
        });
assert.throws(TypeError, function() {
            Array.prototype.map.call(obj, null);
});
assert(accessed, 'accessed !== true');
