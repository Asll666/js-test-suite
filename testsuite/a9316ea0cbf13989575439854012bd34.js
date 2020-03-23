load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: RegExp instance has no [[Construct]] internal method
es5id: 15.10.7_A2_T2
description: Checking if creating "new RegExp" instance fails
---*/

//CHECK#1
try {
  $ERROR('#1.1: new new RegExp throw TypeError. Actual: ' + (new new RegExp));
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: new new RegExp throw TypeError. Actual: ' + (e));
  }
}
