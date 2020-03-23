load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 13.2-14-s
description: >
    StrictMode - writing a property named 'arguments' of function
    objects is not allowed outside the function
---*/

        var foo = new Function("'use strict';");
assert.throws(TypeError, function() {
            foo.arguments = 41;
});