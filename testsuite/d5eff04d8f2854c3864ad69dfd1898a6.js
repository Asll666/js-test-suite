load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * NaN expression has a type Number
 *
 * @path ch08/8.5/S8.5_A3.js
 * @description Check type of NaN
 */

var x=NaN;

///////////////////////////////////////////////////////
// CHECK#1
if (typeof(x) !== "number"){
  $ERROR('#1: var x=NaN; typeof(x) === "number". Actual: ' + (typeof(x)));
}
//
//////////////////////////////////////////////////////////

///////////////////////////////////////////////////////
// CHECK#2
if (typeof(NaN) !== "number"){
  $ERROR('#2: typeof(NaN) === "number". Actual: ' + (typeof(NaN)));
}
//
//////////////////////////////////////////////////////////

