load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator uses ToNumber
 *
 * @path ch09/9.6/S9.6_A3.1_T2.js
 * @description Type(x) is Number
 */

// CHECK#1
if ((new Number(1) >>> 0) !== 1) {
  $ERROR('#1: (new Number(1) >>> 0) === 1. Actual: ' + ((new Number(1) >>> 0)));
}

// CHECK#2
if ((-1.234 >>> 0) !== 4294967295) {
  $ERROR('#2: (-1.234 >>> 0) === 4294967295. Actual: ' + ((-1.234 >>> 0)));
}
