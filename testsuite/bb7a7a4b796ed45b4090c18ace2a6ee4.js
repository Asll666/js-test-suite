load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch13/13.2/13.2-31-s.js
 * @description StrictMode - property named 'caller' of function objects is not configurable
 * @onlyStrict
 */



function testcase() {
        return Object.getOwnPropertyDescriptor(new Function("'use strict';"), 
                                               "caller") === undefined;
}
runTestCase(testcase);
