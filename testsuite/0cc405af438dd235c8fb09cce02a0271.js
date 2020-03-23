load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Array has property prototype
es5id: 15.4.3.1_A1
description: Checking use hasOwnProperty
---*/

//CHECK#1
if (Array.hasOwnProperty('prototype') !== true) {
	$ERROR('#1: Array.hasOwnProperty(\'prototype\') === true. Actual: ' + (Array.hasOwnProperty('prototype')));
}