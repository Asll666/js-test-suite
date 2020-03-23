load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.3.2-1-10
description: Array.isArray applied to RegExp object
---*/

assert.sameValue(Array.isArray(new RegExp()), false, 'Array.isArray(new RegExp())');
