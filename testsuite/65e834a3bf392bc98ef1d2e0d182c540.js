load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-5-21
description: Array.prototype.some - the global object can be used as thisArg
---*/

var global = this;
        function callbackfn(val, idx, obj) {
            return this === global;
        }

assert([11].some(callbackfn, this), '[11].some(callbackfn, global) !== true');
