load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator uses GetValue
 *
 * @path ch11/11.14/S11.14_A2.1_T2.js
 * @description If GetBase(Expression) is null, throw ReferenceError
 */

//CHECK#1
try {
  x, 1;
  $ERROR('#1.1: x, 1 throw ReferenceError. Actual: ' + (x, 1));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: x, 1 throw ReferenceError. Actual: ' + (e));  
  }
}

