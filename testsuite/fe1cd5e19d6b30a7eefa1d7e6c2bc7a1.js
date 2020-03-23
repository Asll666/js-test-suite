load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-a-7
description: >
    Object.defineProperties - 'Properties' is a Function object which
    implements its own [[Get]] method to get enumerable own property
---*/

        var obj = {};
        var props = function () { };

        Object.defineProperty(props, "prop", {
            value: {
                value: 7
            },
            enumerable: true
        });

        Object.defineProperties(obj, props);

assert(obj.hasOwnProperty("prop"), 'obj.hasOwnProperty("prop") !== true');
assert.sameValue(obj.prop, 7, 'obj.prop');
