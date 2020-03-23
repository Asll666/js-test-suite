load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: let P be ToString(pattern) and let F be ToString(flags)
es5id: 15.10.4.1_A8_T7
description: >
    Pattern is {toString:void 0, valueOf:function(){throw "invalof";}
    } and flags is "i"
---*/

//CHECK#1
try {
	$ERROR('#1.1: new RegExp({toString:void 0, valueOf:function(){throw "invalof";}}) throw "invalof". Actual: ' + (new RegExp({toString:void 0, valueOf:function(){throw "invalof";}})));
} catch (e) {
	if (e !== "invalof" ) {
		$ERROR('#1.2: new RegExp({toString:void 0, valueOf:function(){throw "invalof";}}) throw "invalof". Actual: ' + (e));
	}
}
