load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The push property of Array has not prototype property
es5id: 15.4.4.7_A6.6
description: Checking Array.prototype.push.prototype
---*/

//CHECK#1
if (Array.prototype.push.prototype !== undefined) {
  $ERROR('#1: Array.prototype.push.prototype === undefined. Actual: ' + (Array.prototype.push.prototype));
}
