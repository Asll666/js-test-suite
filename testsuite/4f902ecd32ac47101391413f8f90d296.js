load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-31
description: >
    Object.defineProperty - 'enumerable' property in 'Attributes' is
    own accessor property(without a get function) that overrides an
    inherited accessor property (8.10.5 step 3.a)
---*/

        var obj = {};
        var accessed = false;
        var proto = {};

        Object.defineProperty(proto, "enumerable", {
            get: function () {
                return true;
            }
        });

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;

        var child = new ConstructFun();

        Object.defineProperty(child, "enumerable", {
            set: function () { }
        });

        Object.defineProperty(obj, "property", child);

        for (var prop in obj) {
            if (prop === "property") {
                accessed = true;
            }
        }

assert.sameValue(accessed, false, 'accessed');