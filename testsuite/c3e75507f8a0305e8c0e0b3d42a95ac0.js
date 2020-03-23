load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch11/11.13/11.13.1/11.13.1-4-29gs.js
 * @description Strict Mode - SyntaxError is thrown if the identifier 'Math.PI' appears as the LeftHandSideExpression of simple assignment(=)
 * @onlyStrict
 * @negative .
 */
"use strict";
Math.PI = 20;
