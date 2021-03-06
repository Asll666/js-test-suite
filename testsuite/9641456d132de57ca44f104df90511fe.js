load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch13/13.2/13.2-36-s.js
 * @description StrictMode - property named 'arguments' of function objects is not configurable
 * @onlyStrict
 */



function testcase() {
        var funcExpr = function () { "use strict";};
        return Object.getOwnPropertyDescriptor(funcExpr, 
                                                "arguments") === undefined;
}
runTestCase(testcase);
