load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x @= y uses PutValue(x, x @ y)
 *
 * @path ch11/11.13/11.13.2/S11.13.2_A3.1_T7.js
 * @description Checking Expression and Variable statements for x >>= y
 */

//CHECK#1
var x = 4;
x >>= 1; 
if (x !== 2) {
  $ERROR('#1: var x = 4; x >>= 1; x === 2. Actual: ' + (x));
}

//CHECK#2
y = 4;
y >>= 1;
if (y !== 2) {
  $ERROR('#2: y = 4; y >>= 1; y === 2. Actual: ' + (y));
}

