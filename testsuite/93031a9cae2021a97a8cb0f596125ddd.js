load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The [[Class]] property of the newly constructed object is set to "Array"
es5id: 15.4.1_A1.2_T1
description: Checking use Object.prototype.toString
---*/

//CHECK#1
var x = Array(); 
x.getClass = Object.prototype.toString;
if (x.getClass() !== "[object " + "Array" + "]") {
  $ERROR('#1: var x = Array(); x.getClass = Object.prototype.toString; x is Array object. Actual: ' + (x.getClass()));
}

//CHECK#2
var x = Array(0,1,2); 
x.getClass = Object.prototype.toString;
if (x.getClass() !== "[object " + "Array" + "]") {
  $ERROR('#2: var x = Array(0,1,2); x.getClass = Object.prototype.toString; x is Array object. Actual: ' + (x.getClass()));
}