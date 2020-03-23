load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-157
description: >
    Object.create - 'value' property of one property in 'Properties'
    is own data property that overrides an inherited accessor property
    (8.10.5 step 5.a)
---*/

        var proto = {};

        Object.defineProperty(proto, "value", {
            get: function () {
                return "inheritedAccessorProperty";
            }
        });

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;

        var descObj = new ConstructFun();

        Object.defineProperty(descObj, "value", {
            get: function () {
                return "ownDataProperty";
            }
        });

        var newObj = Object.create({}, {
            prop: descObj
        });

assert.sameValue(newObj.prop, "ownDataProperty", 'newObj.prop');