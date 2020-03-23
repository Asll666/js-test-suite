load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch10/10.4/10.4.2/10.4.2-2-c-1.js
 * @description Direct val code in non-strict mode - can instantiate variable in calling context
 */


function testcase() {
  var x = 0;
  return function inner() {
     eval("var x = 1");
     if (x === 1)
        return true;
     } ();
   }
runTestCase(testcase);
