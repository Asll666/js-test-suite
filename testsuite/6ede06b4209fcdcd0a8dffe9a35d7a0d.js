load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1-2-10
description: >
    Allow reserved words as property names by dot operator assignment,
    verified with hasOwnProperty: in, try, class
---*/

        var tokenCodes = {};
        tokenCodes.in = 0;
        tokenCodes.try = 1;
        tokenCodes.class = 2;
        var arr = [
            'in', 
            'try',
            'class'
        ];
        for(var p in tokenCodes) {       
            for(var p1 in arr) {                
                if(arr[p1] === p) {
                    assert(tokenCodes.hasOwnProperty(arr[p1]), 'tokenCodes.hasOwnProperty(arr[p1]) !== true');
                }
            }
        }
