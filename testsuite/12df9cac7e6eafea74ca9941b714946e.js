load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    If (Evaluate Statement).type is "break" and (Evaluate Statement).target
    is in the current label set, (normal, (Evaluate Statement), empty) is
    returned while evaluating a loop
es5id: 12.6.3_A12_T1
description: Breaking a loop with "break"
---*/

var __str, index;
__str=""

for(index=0; index<10; index+=1) {
	if (index>5)break;
	__str+=index;
}

if (__str!=="012345") {
	$ERROR('#1:__str === "012345". Actual: __str ==='+__str  );
}
