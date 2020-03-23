load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x - y returns ToNumber(x) - ToNumber(y)
 *
 * @path ch11/11.6/11.6.2/S11.6.2_A3_T1.3.js
 * @description Type(x) and Type(y) vary between primitive string and String object
 */

//CHECK#1
if ("1" - "1" !== 0) {
  $ERROR('#1: "1" - "1" === 0. Actual: ' + ("1" - "1"));
}

//CHECK#2
if (new String("1") - "1" !== 0) {
  $ERROR('#2: new String("1") - "1" === 0. Actual: ' + (new String("1") - "1"));
}

//CHECK#3
if ("1" - new String("1") !== 0) {
  $ERROR('#3: "1" - new String("1") === 0. Actual: ' + ("1" - new String("1")));
}

//CHECK#4
if (new String("1") - new String("1") !== 0) {
  $ERROR('#4: new String("1") - new String("1") === 0. Actual: ' + (new String("1") - new String("1")));
}

//CHECK#5
if (isNaN("x" - "1") !== true) {
  $ERROR('#5: "x" - "1" === Not-a-Number. Actual: ' + ("x" - "1"));
}

//CHECK#6
if (isNaN("1" - "x") !== true) {
  $ERROR('#6: "1" - "x" === Not-a-Number. Actual: ' + ("1" - "x"));
}
