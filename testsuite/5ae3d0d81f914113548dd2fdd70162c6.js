load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch07/7.6/7.6.1/7.6.1-4-5.js
 * @description Allow reserved words as property names by set function within an object, verified with hasOwnProperty: finally, return, void
 */


function testcase() {
        var test0 = 0, test1 = 1, test2 = 2;
        var tokenCodes  = {
            set finally(value){
                test0 = value;
            },
            get finally(){
                return test0;
            },
            set return(value){
                test1 = value;
            },
            get return(){
                return test1;
            },
            set void(value){
                test2 = value;
            },
            get void(){
                return test2;
            }
        };      
        var arr = [
            'finally', 
            'return', 
            'void'
            ];
        for(var p in tokenCodes) {       
            for(var p1 in arr) {                
                if(arr[p1] === p) {
                    if(!tokenCodes.hasOwnProperty(arr[p1])) {
                        return false;
                    };
                }
            }
        }
        return true;
    }
runTestCase(testcase);
