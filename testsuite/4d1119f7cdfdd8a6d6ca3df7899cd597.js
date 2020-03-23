load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-8-b-ii-1
description: >
    Array.prototype.reduceRight - added properties in step 2 are
    visible here
---*/

        var obj = {};

        function callbackfn(prevVal, curVal, idx, obj) { }

        Object.defineProperty(obj, "length", {
            get: function () {
                obj[2] = "accumulator";
                return 3;
            },
            configurable: true
        });

assert.sameValue(Array.prototype.reduceRight.call(obj, callbackfn), "accumulator", 'Array.prototype.reduceRight.call(obj, callbackfn)');
