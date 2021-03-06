load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator -x returns -ToNumber(x)
 *
 * @path ch11/11.4/11.4.7/S11.4.7_A3_T4.js
 * @description Type(x) is undefined or null
 */

//CHECK#1
if (isNaN(-void 0) !== true) {
  $ERROR('#1: +void 0 === Not-a-Number. Actual: ' + (+void 0));
}

//CHECK#2
if (-null !== 0) {
  $ERROR('#2: +null === 0. Actual: ' + (+null));
}

