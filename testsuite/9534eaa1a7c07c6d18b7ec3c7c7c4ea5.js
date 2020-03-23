load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.6-6-4
description: >
    'length' property of arguments object for 0 argument function call
    is 0 even with formal parameters
flags: [noStrict]
---*/

function testcase() {
      var arguments= undefined;
	(function (a,b,c) { assert.sameValue(arguments.length, 0); })();
 }
testcase();
