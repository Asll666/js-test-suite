load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-4-15
description: >
    Array.prototype.some - calling with no callbackfn is the same as
    passing undefined for callbackfn
---*/

        var obj = { };
        var lengthAccessed = false;
        var loopAccessed = false;

        Object.defineProperty(obj, "length", {
            get: function () {
                lengthAccessed = true;
                return 20;
            },
            configurable: true
        });
        Object.defineProperty(obj, "0", {
            get: function () {
                loopAccessed = true;
                return 10;
            },
            configurable: true
        });
assert.throws(TypeError, function() {
            Array.prototype.some.call(obj);
});
assert(lengthAccessed, 'lengthAccessed !== true');
assert.sameValue(loopAccessed, false, 'loopAccessed');
