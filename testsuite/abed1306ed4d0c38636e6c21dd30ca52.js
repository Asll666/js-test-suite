load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If y<0 and y is finite and x is equal to +Infinity, Math.atan2(y,x) is -0
es5id: 15.8.2.5_A16
description: >
    Checking if Math.atan2(y,x) is -0, where y<0 and y is finite and x
    is equal to +Infinity
---*/

// CHECK#1
var x = +Infinity;
var y = new Array();
y[0] = -0.000000000000001;
y[1] = -1;
y[2] = -1.7976931348623157E308; //largest by abs() finite number 
var ynum = 3;

for (var i = 0; i < ynum; i++)
{
  assert.sameValue(
    Math.atan2(y[i], x),
    -0,
    "(" + y[i] + ", Infinity)"
  );
}
