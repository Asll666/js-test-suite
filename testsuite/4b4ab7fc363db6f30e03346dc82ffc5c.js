load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The form (?! Disjunction ) specifies a zero-width negative lookahead.
    In order for it to succeed, the pattern inside Disjunction must fail to match at the current position.
    The current position is not advanced before matching the sequel
es5id: 15.10.2.8_A2_T10
description: Execute /(?!a|b)|c/.exec("bc") and check results
---*/

var __executed = /(?!a|b)|c/.exec("bc");

var __expected = [""];
__expected.index = 1;
__expected.input = "bc";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /(?!a|b)|c/.exec("bc"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /(?!a|b)|c/.exec("bc"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /(?!a|b)|c/.exec("bc"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /(?!a|b)|c/.exec("bc"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}
