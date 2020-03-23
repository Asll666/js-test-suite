load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.slice (start, end)
es5id: 15.5.4.13_A1_T1
description: Arguments are false and true, and instance is object
---*/

var __instance = new Object(true);

__instance.slice = String.prototype.slice;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.slice(false, true) !== "t") {
  $ERROR('#1: __instance = new Object(true); __instance.slice = String.prototype.slice;  __instance.slice(false, true) === "t". Actual: '+__instance.slice(false, true) );
}
//
//////////////////////////////////////////////////////////////////////////////
