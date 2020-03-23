load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The production QuantifierPrefix :: * evaluates by returning the two
    results 0 and \infty
es5id: 15.10.2.7_A4_T11
description: Execute /cd* /.exec('abcddddefg') and check results
---*/

var __executed = /cd*/.exec('abcddddefg');

var __expected = ["cdddd"];
__expected.index = 2;
__expected.input = 'abcddddefg';

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /cd*/.exec(\'abcddddefg\'); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /cd*/.exec(\'abcddddefg\'); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /cd*/.exec(\'abcddddefg\'); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /cd*/.exec(\'abcddddefg\'); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}
