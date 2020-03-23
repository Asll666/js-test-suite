load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The initial value of String.prototype.constructor is the built-in String
    constructor
es5id: 15.5.4.1_A1_T1
description: Checking String.prototype.constructor
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String.prototype.constructor !== String) {
  $ERROR('#1: String.prototype.constructor === String. Actual: String.prototype.constructor ==='+String.prototype.constructor ); 
}
//
//////////////////////////////////////////////////////////////////////////////
