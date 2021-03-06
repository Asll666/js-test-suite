load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x-- returns x = ToNumber(x) - 1
 *
 * @path ch11/11.3/11.3.2/S11.3.2_A3_T5.js
 * @description Type(x) is Object object or Function object
 */

//CHECK#1
var x = {}; 
x--; 
if (isNaN(x) !== true) {
  $ERROR('#1: var x = {}; x--; x === Not-a-Number. Actual: ' + (x));
}

//CHECK#2
var x = function(){return 1}; 
x--; 
if (isNaN(x) !== true) {
  $ERROR('#2: var x = function(){return 1}; x--; x === Not-a-Number. Actual: ' + (x));
}

