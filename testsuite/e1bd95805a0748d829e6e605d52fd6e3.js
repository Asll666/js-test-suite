load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1-3-15
description: >
    Allow reserved words as property names by index
    assignment,verified with hasOwnProperty: package, protected, static
---*/

        var tokenCodes  = {};
        tokenCodes['package'] = 0;
        tokenCodes['protected'] = 1;
        tokenCodes['static'] = 2;
        var arr = [
            'package',
            'protected',
            'static'   
            ];
        for(var p in tokenCodes) {       
            for(var p1 in arr) {                
                if(arr[p1] === p) {
                    assert(tokenCodes.hasOwnProperty(arr[p1]), 'tokenCodes.hasOwnProperty(arr[p1]) !== true');
                }
            }
        }
