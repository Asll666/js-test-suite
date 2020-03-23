load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-2-11
description: >
    Array.prototype.indexOf - 'length' is own accessor property
    without a get function
---*/

        var obj = { 1: true };
        Object.defineProperty(obj, "length", {
            set: function () { },
            configurable: true
        });

assert.sameValue(Array.prototype.indexOf.call(obj, true), -1, 'Array.prototype.indexOf.call(obj, true)');
