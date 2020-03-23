load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-2-3
description: >
    Array.prototype.reduceRight applied to Array-like object, 'length'
    is an own data property that overrides an inherited data property
---*/

        var accessed = true;

        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return obj.length === 2;
        }

        var proto = { length: 3 };

        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();
        child.length = 2;
        child[0] = 12;
        child[1] = 11;
        child[2] = 9;

assert(Array.prototype.reduceRight.call(child, callbackfn), 'Array.prototype.reduceRight.call(child, callbackfn) !== true');
assert(accessed, 'accessed !== true');