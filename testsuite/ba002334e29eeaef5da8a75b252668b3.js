load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The "length" property of the "setHours" is 4
es5id: 15.9.5.34_A2_T1
description: The "length" property of the "setHours" is 4
---*/

if(Date.prototype.setHours.hasOwnProperty("length") !== true){
  $ERROR('#1: The setHours has a "length" property');
}

if(Date.prototype.setHours.length !== 4){
  $ERROR('#2: The "length" property of the setHours is 4');
}
