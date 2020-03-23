load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.charCodeAt(pos)
es5id: 15.5.4.5_A1_T8
description: Call charCodeAt() function with void 0 argument of string object
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToInteger(void 0) evaluates to 0 charCodeAt() evaluates to charCodeAt(0)
if (String(42).charCodeAt(void 0) !== 0x34) {
  $ERROR('#1: String(42).charCodeAt(void 0) === 0x34. Actual: String(42).charCodeAt(void 0) ==='+String(42).charCodeAt(void 0) ); 
}
//
//////////////////////////////////////////////////////////////////////////////
