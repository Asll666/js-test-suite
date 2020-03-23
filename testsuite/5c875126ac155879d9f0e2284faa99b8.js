load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * "throw Expression" returns (throw, GetValue(Result(1)), empty), where 1 evaluates Expression
 *
 * @path ch12/12.13/S12.13_A2_T2.js
 * @description Throwing null
 */

// CHECK#1
try{
  throw null;
}
catch(e){
  if (e!==null) $ERROR('#1: Exception === null. Actual:  Exception ==='+ e  );
}

