load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.13-0-1
description: Object.isExtensible must exist as a function
---*/

  var f = Object.isExtensible ;

assert.sameValue(typeof(f), "function", 'typeof(f)');
