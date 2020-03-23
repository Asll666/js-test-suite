load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    An escape sequence of the form \ followed by a nonzero decimal number n
    matches the result of the nth set of capturing parentheses (see
    15.10.2.11)
es5id: 15.10.2.9_A1_T4
es6id: B.1.4
description: >
    Execute /\b(\w+) \2\b/.test("do you listen the the band") and
    check results
---*/

var __executed = /\b(\w+) \2\b/.test("do you listen the the band");

//CHECK#1
if (__executed) {
	$ERROR('#1: /\\b(\\w+) \\2\\b/.test("do you listen the the band") === false');
}