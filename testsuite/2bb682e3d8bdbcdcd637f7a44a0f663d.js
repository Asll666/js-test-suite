load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.split can't be used as constructor
es5id: 15.5.4.14_A7
description: Checking if creating the String.prototype.split object fails
---*/

var __FACTORY = String.prototype.split;

try {
  var __instance = new __FACTORY;
  $ERROR('#1: __FACTORY = String.prototype.split; "__instance = new __FACTORY" lead to throwing exception');
} catch (e) {
    if (e instanceof Test262Error) throw e;
}
