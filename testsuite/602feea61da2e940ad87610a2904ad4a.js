load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If Type(Primitive(x)) is not String or Type(Primitive(y)) is not String, then operator x < y returns ToNumber(x) < ToNumber(y)
 *
 * @path ch11/11.8/11.8.1/S11.8.1_A3.1_T1.2.js
 * @description Type(Primitive(x)) and Type(Primitive(y)) vary between primitive number and Number object
 */

//CHECK#1
if (1 < 1 !== false) {
  $ERROR('#1: 1 < 1 === false');
}

//CHECK#2
if (new Number(1) < 1 !== false) {
  $ERROR('#2: new Number(1) < 1 === false');
}

//CHECK#3
if (1 < new Number(1) !== false) {
  $ERROR('#3: 1 < new Number(1) === false');
}

//CHECK#4
if (new Number(1) < new Number(1) !== false) {
  $ERROR('#4: new Number(1) < new Number(1) === false');
}


