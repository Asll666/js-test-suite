load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-4-6
description: Array.prototype.every throws TypeError if callbackfn is string
---*/

  var arr = new Array(10);
assert.throws(TypeError, function() {
    arr.every("abc");
});
