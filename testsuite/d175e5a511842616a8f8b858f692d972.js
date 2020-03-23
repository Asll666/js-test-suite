load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    When String is called as a function rather than as a constructor, it
    performs a type conversion
es5id: 15.5.1.1_A1_T13
description: Call String(true) and String(false)
---*/

var __str = String(true);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __str !== "string") {
  $ERROR('#1: __str = String(true); typeof __str === "string". Actual: typeof __str ==='+typeof __str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__str !== "true") {
  $ERROR('#2: __str = String(true); __str === "true". Actual: __str ==='+__str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

__str = String(false);

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (typeof __str !== "string") {
  $ERROR('#3: __str = String(false); typeof __str === "string". Actual: typeof __str ==='+typeof __str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (__str !== "false") {
  $ERROR('#4: __str = String(false); __str === "false". Actual: __str ==='+__str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

__str = String(Boolean(true));

//////////////////////////////////////////////////////////////////////////////
//CHECK#5
if (typeof __str !== "string") {
  $ERROR('#5: __str = String(Boolean(true)); typeof __str === "string". Actual: typeof __str ==='+typeof __str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#6
if (__str !== "true") {
  $ERROR('#6: __str = String(Boolean(true)); __str === "true". Actual: __str ==='+__str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

__str = String(Boolean(false));

//////////////////////////////////////////////////////////////////////////////
//CHECK#7
if (typeof __str !== "string") {
  $ERROR('#7: __str = String(Boolean(false)); typeof __str === "string". Actual: typeof __str ==='+typeof __str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#8
if (__str !== "false") {
  $ERROR('#8: __str = String(Boolean(false)); __str === "false". Actual: __str ==='+__str ); 
}
//
//////////////////////////////////////////////////////////////////////////////
