load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-1-15
description: Array.prototype.reduceRight applied to the Arguments object
---*/

        var accessed = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return '[object Arguments]' === Object.prototype.toString.call(obj);
        }

        var obj = (function () {
            return arguments;
        }("a", "b"));

assert(Array.prototype.reduceRight.call(obj, callbackfn, "a"), 'Array.prototype.reduceRight.call(obj, callbackfn, "a") !== true');
assert(accessed, 'accessed !== true');
