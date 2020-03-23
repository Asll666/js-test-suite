load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-5-4
description: Array.prototype.indexOf returns 0 if fromIndex is 'undefined'
---*/

  var a = [1,2,3];

// undefined resolves to 0
assert.sameValue(a.indexOf(1,undefined), 0, 'a.indexOf(1,undefined)');
