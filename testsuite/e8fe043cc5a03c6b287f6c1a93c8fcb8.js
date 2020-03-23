load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-8-7
description: Array.prototype.map successful to delete the object in callbackfn
---*/

        var obj = {};
        obj.srcArr = [1, 2, 3, 4, 5];

        function callbackfn(val, idx, obj) {
            delete obj.srcArr;
            if (val > 0)
                return 1;
            else
                return 0;
        }

        var resArr = obj.srcArr.map(callbackfn);

assert.sameValue(resArr.toString(), "1,1,1,1,1", 'resArr.toString()');
assert.sameValue(obj.hasOwnProperty("arr"), false, 'obj.hasOwnProperty("arr")');