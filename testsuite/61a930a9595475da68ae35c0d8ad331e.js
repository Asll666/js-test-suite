load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-1-5
description: Array.prototype.lastIndexOf applied to number primitive
---*/

                Number.prototype[1] = isNaN;
                Number.prototype.length = 2;

assert.sameValue(Array.prototype.lastIndexOf.call(5, isNaN), 1, 'Array.prototype.lastIndexOf.call(5, isNaN)');
