load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.5.1-3.d-1
description: >
    Throw RangeError if attempt to set array length property to
    4294967296 (2**32)
---*/


assert.throws(RangeError, function() {
      [].length = 4294967296 ;
});