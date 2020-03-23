load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The production Assertion :: \b evaluates by returning an internal
    AssertionTester closure that takes a State argument x and performs the ...
es5id: 15.10.2.6_A3_T15
description: >
    Execute /\be/.test("pilot\nsoviet robot\topenoffic\u0065") and
    check results
---*/

var __executed = /\be/.test("pilot\nsoviet robot\topenoffic\u0065");

//CHECK#1
if (__executed) {
	$ERROR('#1: /\\be/.test("pilot\\nsoviet robot\\topenoffic\\u0065") === false');
}
