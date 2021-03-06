load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If x is -0, Math.cos(x) is 1
es5id: 15.8.2.7_A3
description: Checking if Math.cos(-0) is 1
---*/

// CHECK#1
var x = -0;
if (Math.cos(x) !== 1)
{
	$ERROR("#1: 'var x = -0; Math.cos(x) !== 1'");
}
