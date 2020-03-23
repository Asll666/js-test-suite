load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Function constructor has length property whose value is 1
es5id: 15.3.3_A3
description: Checking Function.length property
---*/

//CHECK#1
if (!Function.hasOwnProperty("length")){
  $ERROR('#1: Function constructor has length property');
}

//CHECK#2
if (Function.length !== 1) {
  $ERROR('#2: Function constructor length property value is 1');
}
