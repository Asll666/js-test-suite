load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch11/11.13/11.13.2/11.13.2-6-21-s.js
 * @description Strict Mode - SyntaxError is thrown if the identifier arguments appear as the LeftHandSideExpression of a Compound Assignment operator(^=)
 * @onlyStrict
 */


function testcase() {
        "use strict";
        var blah = arguments;
        try {
            eval("arguments ^= 20;");
            return false;
        } catch (e) {
            return e instanceof SyntaxError && blah === arguments;
        }
    }
runTestCase(testcase);
