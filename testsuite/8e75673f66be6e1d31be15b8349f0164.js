load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1-8-7
description: >
    Allow reserved words as property names by set function within an
    object, accessed via indexing: while, debugger, function
---*/

        var test0 = 0, test1 = 1, test2 = 2;
        var tokenCodes  = {
            set while(value){
                test0 = value;
            },
            get while(){
                return test0
            },
            set debugger(value){
                test1 = value;
            },
            get debugger(){
                return test1;
            },
            set function(value){
                test2 = value;
            },
            get function(){
                return test2;
            }
        }; 
        var arr = [
            'while' ,
            'debugger', 
            'function'
        ];
        for (var i = 0; i < arr.length; i++) {
            assert.sameValue(tokenCodes[arr[i]], i, 'tokenCodes[arr[i]]');
        }
