load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-3-8
description: >
    Object.defineProperties - no additional property is defined in 'O'
    when 'Properties' doesn't contain enumerable own property
---*/

        var obj = {};

        var props = {};

        Object.defineProperty(props, "prop1", {
            value: {},
            enumerable: false
        });

        Object.defineProperty(props, "prop2", {
            get: function () {
                return {};
            },
            enumerable: true
        });

        Object.defineProperties(obj, props);

assert.sameValue(obj.hasOwnProperty("prop1"), false, 'obj.hasOwnProperty("prop1")');
assert(obj.hasOwnProperty("prop2"), 'obj.hasOwnProperty("prop2") !== true');
