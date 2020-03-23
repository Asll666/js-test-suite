load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch08/8.12/8.12.1/8.12.1-1_40.js
 * @description Properties - [[HasOwnProperty]] (configurable, non-enumerable inherited getter property)
 */

function testcase() {

    var base = {};
    Object.defineProperty(base, "foo", {get: function() {return 42;}, configurable:true});
    var o = Object.create(base);
    return o.hasOwnProperty("foo")===false;

}
runTestCase(testcase);
