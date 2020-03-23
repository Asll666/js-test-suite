load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    A TypeError exception is thrown if the this value is not an object for
    which the value of the internal [[Class]] property is "RegExp"
es5id: 15.10.6.2_A2_T4
description: The tested object is new String("[a-b]")
---*/

var __instance = new String("[a-b]");

__instance.exec = RegExp.prototype.exec;

//CHECK#1
    try {
    	$ERROR('#1.1: __instance = new String("[a-b]"); __instance.exec = RegExp.prototype.exec; exec("message to investigate"). Actual: ' + (__instance.exec("message to investigate")));
    } catch (e) {
    	if ((e instanceof TypeError) !== true) {
    		$ERROR('#1.2: __instance = new String("[a-b]"); __instance.exec = RegExp.prototype.exec; exec("message to investigate"). Actual: ' + (e));
    	}
   }
