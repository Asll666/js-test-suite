load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-4-189
description: >
    Object.getOwnPropertyDescriptor returns data desc (all false) for
    properties on built-ins (Array.prototype)
---*/

  var desc = Object.getOwnPropertyDescriptor(Array, "prototype");

assert.sameValue(desc.writable, false, 'desc.writable');
assert.sameValue(desc.enumerable, false, 'desc.enumerable');
assert.sameValue(desc.configurable, false, 'desc.configurable');
assert.sameValue(desc.hasOwnProperty('get'), false, 'desc.hasOwnProperty("get")');
assert.sameValue(desc.hasOwnProperty('set'), false, 'desc.hasOwnProperty("set")');
