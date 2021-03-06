load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator +x returns ToNumber(x)
 *
 * @path ch11/11.4/11.4.6/S11.4.6_A3_T2.js
 * @description Type(x) is number primitive or Number object
 */

//CHECK#1
if (+0.1 !== 0.1) {
  $ERROR('#1: +0.1 === 0.1. Actual: ' + (+0.1));
}

//CHECK#2
if (+new Number(-1.1) !== -1.1) {
  $ERROR('#2: +new Number(-1.1) === -1.1. Actual: ' + (+new Number(-1.1)));
}

