load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: PutValue operates only on references (see step 1).
es5id: 11.13.1-1-4
description: >
    simple assignment throws ReferenceError if LeftHandSide is not a
    reference (null)
---*/


assert.throws(ReferenceError, function() {
    eval("null = 42");
});
