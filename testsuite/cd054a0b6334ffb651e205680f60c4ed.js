load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-3-13
description: >
    Array.prototype.lastIndexOf - value of 'length' is a string
    containing a decimal number
---*/

        var obj = { 4: 4, 5: 5, length: "5.512345" };

assert.sameValue(Array.prototype.lastIndexOf.call(obj, 4), 4, 'Array.prototype.lastIndexOf.call(obj, 4)');
assert.sameValue(Array.prototype.lastIndexOf.call(obj, 5), -1, 'Array.prototype.lastIndexOf.call(obj, 5)');
