load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-314
description: >
    Object.defineProperties - 'O' is an Arguments object, 'name' is
    own property of [[ParameterMap]] of 'O', test 'name' is deleted if
    'name' is configurable and 'desc' is accessor descriptor (10.6
    [[DefineOwnProperty]] step 5.a.i)
---*/

        var arg = (function () {
            return arguments;
        }(1, 2, 3));
        var accessed = false;

        Object.defineProperties(arg, {
            "0": {
                get: function () {
                    accessed = true;
                    return 12;
                }
            }
        });

assert.sameValue(arg[0], 12, 'arg[0]');
assert(accessed, 'accessed !== true');
