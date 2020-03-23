load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-5-22
description: Array.prototype.forEach - boolean primitive can be used as thisArg
---*/

        var result = false;

        function callbackfn(val, idx, obj) {
            result = (this.valueOf() === false);
        }

        [11].forEach(callbackfn, false);

assert(result, 'result !== true');
