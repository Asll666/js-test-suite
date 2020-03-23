load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The production x *= y is the same as the production x = x * y
es5id: 11.13.2_A4.1_T2.2
description: >
    Type(x) is different from Type(y) and both types vary between
    Number (primitive or object) and String (primitive and object)
---*/

var x;

//CHECK#1
x = "1";
x *= 1;
if (x !== 1) {
  $ERROR('#1: x = "1"; x *= 1; x === 1. Actual: ' + (x));
}

//CHECK#2
x = 1;
x *= "1";
if (x !== 1) {
  $ERROR('#2: x = 1; x *= "1"; x === 1. Actual: ' + (x));
}

//CHECK#3
x = new String("1");
x *= 1;
if (x !== 1) {
  $ERROR('#3: x = new String("1"); x *= 1; x === 1. Actual: ' + (x));
}

//CHECK#4
x = 1;
x *= new String("1");
if (x !== 1) {
  $ERROR('#4: x = 1; x *= new String("1"); x === 1. Actual: ' + (x));
}

//CHECK#5
x = "1";
x *= new Number(1);
if (x !== 1) {
  $ERROR('#5: x = "1"; x *= new Number(1); x === 1. Actual: ' + (x));
}

//CHECK#6
x = new Number(1);
x *= "1";
if (x !== 1) {
  $ERROR('#6: x = new Number(1); x *= "1"; x === 1. Actual: ' + (x));
}

//CHECK#7
x = new String("1");
x *= new Number(1);
if (x !== 1) {
  $ERROR('#7: x = new String("1"); x *= new Number(1); x === 1. Actual: ' + (x));
}

//CHECK#8
x = new Number(1);
x *= new String("1");
if (x !== 1) {
  $ERROR('#8: x = new Number(1); x *= new String("1"); x === 1. Actual: ' + (x));
}

//CHECK#9
x = "x";
x *= 1;
if (isNaN(x) !== true) {
  $ERROR('#9: x = "x"; x *= 1; x === Not-a-Number. Actual: ' + (x));
}

//CHECK#10
x = 1;
x *= "x";
if (isNaN(x) !== true) {
  $ERROR('#10: x = 1; x *= "x"; x === Not-a-Number. Actual: ' + (x));
}
