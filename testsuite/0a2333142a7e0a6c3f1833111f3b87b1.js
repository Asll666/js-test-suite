load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator ~x uses GetValue
 *
 * @path ch11/11.4/11.4.8/S11.4.8_A2.1_T2.js
 * @description If GetBase(x) is null, throw ReferenceError
 */

//CHECK#1
try {
  ~x;
  $ERROR('#1.1: ~x throw ReferenceError. Actual: ' + (~x));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: ~x throw ReferenceError. Actual: ' + (e));  
  }
}


