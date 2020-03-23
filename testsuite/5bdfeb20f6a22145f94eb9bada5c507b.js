load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: RegExp instance has no [[Call]] internal method
es5id: 15.10.7_A1_T1
description: Checking if call of RegExp instance fails
---*/

//CHECK#1
try {
	$ERROR('#1.1: /[^a]*/() throw TypeError. Actual: ' + (/[^a]*/()));
} catch (e) {
	if ((e instanceof TypeError) !== true) {
		$ERROR('#1.2: /[^a]*/() throw TypeError. Actual: ' + (e));
	}
}
