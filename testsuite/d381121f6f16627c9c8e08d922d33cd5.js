load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-1-15
description: Array.prototype.filter applied to the Arguments object
---*/

        function callbackfn(val, idx, obj) {
            return '[object Arguments]' === Object.prototype.toString.call(obj);
        }

        var obj = (function () {
            return arguments;
        }("a", "b"));

        var newArr = Array.prototype.filter.call(obj, callbackfn);

assert.sameValue(newArr[0], "a", 'newArr[0]');
assert.sameValue(newArr[1], "b", 'newArr[1]');
