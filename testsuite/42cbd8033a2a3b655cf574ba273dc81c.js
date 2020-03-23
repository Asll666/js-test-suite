load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The global object does not have a [[Construct]] property
es5id: 15.1_A1_T2
description: >
    It is not possible to use the global object as a constructor  with
    the new operator
---*/

var global = this;

assert.throws(TypeError, function() {
    new global();
});
