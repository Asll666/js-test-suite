load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Check ToLength(length) for non Array objects
es5id: 15.4.4.7_A4_T2
description: length = 4294967295
---*/

var obj = {};
obj.push = Array.prototype.push;
obj.length = 4294967295;

//CHECK#1
var push = obj.push("x", "y", "z");
if (push !== 4294967298) {
  $ERROR('#1: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967295; obj.push("x", "y", "z") === 4294967298. Actual: ' + (push));
}

//CHECK#2
if (obj.length !== 4294967298) {
  $ERROR('#2: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967295; obj.push("x", "y", "z"); obj.length === 4294967298. Actual: ' + (obj.length));
}

//CHECK#3
if (obj[4294967295] !== "x") {
   $ERROR('#3: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967295; obj.push("x", "y", "z"); obj[4294967295] === "x". Actual: ' + (obj[4294967295]));
}

//CHECK#4
if (obj[4294967296] !== "y") {
   $ERROR('#4: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967295; obj.push("x", "y", "z"); obj[4294967296] === "y". Actual: ' + (obj[4294967296]));
}  

//CHECK#5
if (obj[4294967297] !== "z") {
   $ERROR('#5: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967295; obj.push("x", "y", "z"); obj[4294967297] === "z". Actual: ' + (obj[4294967297]));
}
