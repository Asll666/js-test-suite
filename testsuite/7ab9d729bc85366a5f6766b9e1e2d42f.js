load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Only AssignmentExpression is admitted when variable is initialized
 *
 * @path ch12/12.2/S12.2_A8_T1.js
 * @description Checking if execution of "var x += 1" fails
 * @negative
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
var x += 1;
//
//////////////////////////////////////////////////////////////////////////////

