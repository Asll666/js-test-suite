load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-9-c-i-5
description: >
    Array.prototype.reduce - element to be retrieved is own data
    property that overrides an inherited accessor property on an
    Array-like object
---*/

        var testResult = false;
        var initialValue = 0;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 0) {
                testResult = (curVal === "9");
            }
        }

        var proto = {};

        Object.defineProperty(proto, "0", {
            get: function () {
                return 0;
            },
            configurable: true
        });

        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();
        child.length = 2;
        
        Object.defineProperty(child, "0", {
            value: "9",
            configurable: true
        });

        child[1] = "1";

        Array.prototype.reduce.call(child, callbackfn, initialValue);

assert(testResult, 'testResult !== true');
