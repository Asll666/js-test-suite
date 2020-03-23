load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of shift is 0
es5id: 15.4.4.9_A5.4
description: shift.length === 1
---*/

//CHECK#1
if (Array.prototype.shift.length !== 0) {
  $ERROR('#1: Array.prototype.shift.length === 0. Actual: ' + (Array.prototype.shift.length));
}
