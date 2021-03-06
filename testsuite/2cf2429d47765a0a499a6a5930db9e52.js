load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Date.prototype.getMinutes property "length" has { ReadOnly, !
    DontDelete, DontEnum } attributes
es5id: 15.9.5.20_A3_T2
description: Checking DontDelete attribute
---*/

if (delete Date.prototype.getMinutes.length  !== true) {
  $ERROR('#1: The Date.prototype.getMinutes.length property does not have the attributes DontDelete');
}

if (Date.prototype.getMinutes.hasOwnProperty('length')) {
  $ERROR('#2: The Date.prototype.getMinutes.length property does not have the attributes DontDelete');
}
