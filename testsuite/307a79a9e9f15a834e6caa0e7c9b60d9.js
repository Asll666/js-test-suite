load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.12-2-a-3
description: >
    Object.isFrozen - 'P' is own data property that overrides an
    inherited accessor property
---*/

        var proto = {};

        Object.defineProperty(proto, "foo", {
            get: function () {
                return 9;
            },
            configurable: false
        });

        var Con = function () { };
        Con.prototype = proto;
        var child = new Con();


        Object.defineProperty(child, "foo", {
            value: 12,
            configurable: true
        });

        Object.preventExtensions(child);

assert.sameValue(Object.isFrozen(child), false, 'Object.isFrozen(child)');
