load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Object.prototype.propertyIsEnumerable can't be used as a constructor
es5id: 15.2.4.7_A7
description: >
    Checking if creating "new Object.prototype.propertyIsEnumerable"
    fails
---*/

var FACTORY = Object.prototype.propertyIsEnumerable;

assert.throws(TypeError, function() {
  new FACTORY;
});
