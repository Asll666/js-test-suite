load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The join property of Array has not prototype property
es5id: 15.4.4.5_A6.6
description: Checking Array.prototype.join.prototype
---*/

//CHECK#1
if (Array.prototype.join.prototype !== undefined) {
  $ERROR('#1: Array.prototype.join.prototype === undefined. Actual: ' + (Array.prototype.join.prototype));
}
