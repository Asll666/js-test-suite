load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x - y returns ToNumber(x) - ToNumber(y)
 *
 * @path ch11/11.6/11.6.2/S11.6.2_A3_T1.1.js
 * @description Type(x) and Type(y) vary between primitive boolean and Boolean object
 */

//CHECK#1
if (true - true !== 0) {
  $ERROR('#1: true - true === 0. Actual: ' + (true - true));
}

//CHECK#2
if (new Boolean(true) - true !== 0) {
  $ERROR('#2: new Boolean(true) - true === 0. Actual: ' + (new Boolean(true) - true));
}

//CHECK#3
if (true - new Boolean(true) !== 0) {
  $ERROR('#3: true - new Boolean(true) === 0. Actual: ' + (true - new Boolean(true)));
}

//CHECK#4
if (new Boolean(true) - new Boolean(true) !== 0) {
  $ERROR('#4: new Boolean(true) - new Boolean(true) === 0. Actual: ' + (new Boolean(true) - new Boolean(true)));
}

