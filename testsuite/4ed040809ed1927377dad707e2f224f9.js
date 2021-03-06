load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The result of evaluating "for( ExpNoIn;Exp;Exp)" loop is returning (normal, evalValue, empty)
 *
 * @path ch12/12.6/12.6.3/S12.6.3_A9.1.js
 * @description Using eval
 */

supreme=5;

//////////////////////////////////////////////////////////////////////////////
//CHECK#
try {
	var __evaluated =  eval("for(count=0;;) {if (count===supreme)break;else count++; }");
	if (__evaluated !== 4) {
		$ERROR('#1: __evaluated === 4. Actual:  __evaluated ==='+ __evaluated  );
	}
} catch (e) {
	$ERROR('#1: var __evaluated =  eval("for(count=0;;) {if (count===supreme)break;else count++; }"); does not lead to throwing exception');
}
//
//////////////////////////////////////////////////////////////////////////////

