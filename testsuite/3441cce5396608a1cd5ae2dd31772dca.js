load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-5-3
description: Array.prototype.lastIndexOf when fromIndex is boolean
---*/

  var a = new Array(1,2,1);

assert.sameValue(a.lastIndexOf(2,true), 1, 'true resolves to 1');
assert.sameValue(a.lastIndexOf(2,false), -1, 'false resolves to 0');
