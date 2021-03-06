load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch08/8.12/8.12.5/8.12.5-3-b_2.js
 * @description Changing the value of a data property should not affect it's non-value property descriptor attributes.
 */


function testcase() {
    var tempObj = {};
    
    Object.defineProperty(tempObj, "reduce", { value:456, enumerable:false, writable:true});
    var origReduce = tempObj.reduce;
    var origDesc = Object.getOwnPropertyDescriptor(tempObj, "reduce");

    var newDesc;
    
    try {
        tempObj.reduce = 123;
        newDesc = Object.getOwnPropertyDescriptor(tempObj, "reduce");
        var descArray = [origDesc, newDesc];
        
        for (var j in descArray) {
            for (var i in descArray[j]) {
                if (i==="value") {
                    if (origDesc[i]===newDesc[i]) {
                        return false;
                    }
                }
                else if (origDesc[i]!==newDesc[i]) {
                    return false;
                }
            }
        }
        return true;
    
    } finally {
        tempObj.reduce = origReduce;
    }
}
runTestCase(testcase);
