load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The production QuantifierPrefix :: + evaluates by returning the two
    results 1 and \infty
es5id: 15.10.2.7_A3_T6
description: Execute /[a-z]+\d+/.exec("__abc123.0") and check results
---*/

var __executed = /[a-z]+\d+/.exec("__abc123.0");

var __expected = ["abc123"];
__expected.index = 2;
__expected.input = "__abc123.0";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /[a-z]+\\d+/.exec("__abc123.0"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /[a-z]+\\d+/.exec("__abc123.0"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /[a-z]+\\d+/.exec("__abc123.0"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /[a-z]+\\d+/.exec("__abc123.0"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}