load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-5-10
description: >
    Array.prototype.reduceRight - side-effects produced by step 2 when
    an exception occurs
---*/

        var obj = { 0: 11, 1: 12 };

        var accessed = false;

        Object.defineProperty(obj, "length", {
            get: function () {
                accessed = true;
                return 0;
            },
            configurable: true
        });
assert.throws(TypeError, function() {
            Array.prototype.reduceRight.call(obj, function () { });
});
assert(accessed, 'accessed !== true');
