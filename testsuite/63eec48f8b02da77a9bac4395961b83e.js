load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator uses GetValue
 *
 * @path ch11/11.13/11.13.2/S11.13.2_A2.1_T1.5.js
 * @description Either Type is not Reference or GetBase is not null, check opeartor is "x -= y"
 */

//CHECK#1
var x = 1;
var z = (x -= 1);
if (z !== 0) {
  $ERROR('#1: var x = 1; var z = (x -= 1); z === 0. Actual: ' + (z));
}

//CHECK#2
var x = 1;
var y = 1;
var z = (x -= y);
if (z !== 0) {
  $ERROR('#2: var x = 1; var y = 1; var z = (x -= y); z === 0. Actual: ' + (z));
}


