load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * RegularExpressionFlags :: IdentifierPart
 *
 * @path ch07/7.8/7.8.5/S7.8.5_A3.1_T8.js
 * @description IdentifierPart :: \u0069 (i)
 */

//CHECK#1
var regexp;
eval("regexp = /(?:)/\u0069"); 
if (regexp.ignoreCase !== true) {
  $ERROR('#1: var regexp = /(?:)/\\u0069; regexp.ignoreCase === true. Actual: ' + (regexp.ignoreCase));
}                         

