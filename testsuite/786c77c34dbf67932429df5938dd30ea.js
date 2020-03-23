load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Date constructor has length property whose value is 7
es5id: 15.9.4_A5
description: Checking Date.length property
---*/

//CHECK#1
if (!Date.hasOwnProperty("length")){
  $ERROR('#1: Date constructor has length property');
}

//CHECK#2
if (Date.length !== 7) {
  $ERROR('#2: Date constructor length property value should be 7');
}