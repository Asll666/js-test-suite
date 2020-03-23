load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-4-183
description: >
    Object.getOwnPropertyDescriptor returns undefined for non-existent
    property (arguments_1) on built-in object (Function)
---*/

  var desc = Object.getOwnPropertyDescriptor(Function, "arguments_1");

assert.sameValue(desc, undefined, 'desc');
