load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-605
description: ES5 Attributes - all attributes in Object.freeze are correct
---*/

        var desc = Object.getOwnPropertyDescriptor(Object, "freeze");

        var propertyAreCorrect = (desc.writable === true && desc.enumerable === false && desc.configurable === true);

        var temp = Object.freeze;

            Object.freeze = "2010";

            var isWritable = (Object.freeze === "2010");

            var isEnumerable = false;

            for (var prop in Object) {
                if (prop === "freeze") {
                    isEnumerable = true;
                }
            }
        
            delete Object.freeze;

            var isConfigurable = !Object.hasOwnProperty("freeze");

assert(propertyAreCorrect, 'propertyAreCorrect !== true');
assert(isWritable, 'isWritable !== true');
assert.sameValue(isEnumerable, false, 'isEnumerable');
assert(isConfigurable, 'isConfigurable !== true');
