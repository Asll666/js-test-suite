load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-297
description: >
    Object.defineProperty - 'O' is an Arguments object, 'name' is own
    accessor property of 'O', test TypeError is thrown when updating
    the [[Get]] attribute value of 'name' which is defined as
    non-configurable (10.6 [[DefineOwnProperty]] step 4)
includes: [propertyHelper.js]
---*/

(function () {
    function getFunc1() {
        return 10;
    }
    Object.defineProperty(arguments, "0", {
        get: getFunc1,
        enumerable: false,
        configurable: false
    });
    function getFunc2() {
        return 20;
    }
    try {
        Object.defineProperty(arguments, "0", {
            get: getFunc2
        });
        $ERROR("Expected an exception.");
    } catch (e) {
        verifyEqualTo(arguments, "0", getFunc1());

        verifyNotEnumerable(arguments, "0");

        verifyNotConfigurable(arguments, "0");

        if (!(e instanceof TypeError)) {
            $ERROR("Expected TypeError, got " + e);
        }

    }
}(0, 1, 2));
