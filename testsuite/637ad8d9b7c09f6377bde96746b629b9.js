load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.fromCharCode ( [ char0 [ , char1 [ , ... ] ] ] )
es5id: 15.5.3.2_A3_T2
description: >
    Create function variable, that equal String.fromCharCode, delete
    original String.fromCharCode and use created variable
---*/

var __fcc__func = String.fromCharCode;

delete String.fromCharCode;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__fcc__func(65,66,66,65) !== "ABBA") {
  $ERROR('#1: __fcc__func = String.fromCharCode; delete String.fromCharCode; __fcc__func(65,66,66,65) === "ABBA". Actual: __fcc__func(65,66,66,65) ==='+__fcc__func(65,66,66,65) ); 
}
//
//////////////////////////////////////////////////////////////////////////////