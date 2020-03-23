load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x != y uses GetValue
 *
 * @path ch11/11.9/11.9.2/S11.9.2_A2.1_T3.js
 * @description If GetBase(y) is null, throw ReferenceError
 */

//CHECK#1
try {
  1 != y;
  $ERROR('#1: 1 != y throw ReferenceError');  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: 1 != y throw ReferenceError. Actual: ' + (e));  
  }
}

