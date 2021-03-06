load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-3-21
description: >
    Array.prototype.lastIndexOf - 'length' is an object that has an
    own valueOf method that returns an object and toString method that
    returns a string
---*/

        var toStringAccessed = false;
        var valueOfAccessed = false;

        var targetObj = this;
        var obj = {
            1: targetObj,
            length: {
                toString: function () {
                    toStringAccessed = true;
                    return '3';
                },

                valueOf: function () {
                    valueOfAccessed = true;
                    return {};
                }
            }
        };

assert.sameValue(Array.prototype.lastIndexOf.call(obj, targetObj), 1, 'Array.prototype.lastIndexOf.call(obj, targetObj)');
assert(toStringAccessed, 'toStringAccessed !== true');
assert(valueOfAccessed, 'valueOfAccessed !== true');
