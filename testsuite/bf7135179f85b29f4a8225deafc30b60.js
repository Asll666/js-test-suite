load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch10/10.1/10.1.1/10.1.1-17-s.js
 * @description Strict Mode - Function code that is part of a Accessor PropertyAssignment is in Strict Mode if Accessor PropertyAssignment is contained in use strict(getter)
 * @noStrict
 */


function testcase() {
        "use strict";
        try {
            var obj = {};
            Object.defineProperty(obj, "accProperty", {
                get: function () {
                    eval("public = 1;");
                    return 11;
                }
            });

            var temp = obj.accProperty === 11;
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);
