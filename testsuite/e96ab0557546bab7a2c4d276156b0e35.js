load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-547-3
description: >
    ES5 Attributes - Updating a named accessor property 'P' whose
    [[Configurable]] attribute is false to a data property does not
    succeed, 'A' is an Array object (8.12.9 step 9.a)
includes: [propertyHelper.js]
---*/

var obj = [];

obj.verifySetFunc = "data";
var getFunc = function () {
    return obj.verifySetFunc;
};

var setFunc = function (value) {
    obj.verifySetFunc = value;
};

Object.defineProperty(obj, "prop", {
    get: getFunc,
    set: setFunc,
    enumerable: true,
    configurable: false
});
var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");

try {
    Object.defineProperty(obj, "prop", {
        value: 1001
    });

    $ERROR("Expected an exception.");
} catch (e) {
    var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");

    if (!desc1.hasOwnProperty("get")) {
        $ERROR('Expected desc1.hasOwnProperty("get") to be true, actually ' + desc1.hasOwnProperty("get"));
    }
    
    if (desc2.hasOwnProperty("value")) {
        $ERROR('Expected !desc2.hasOwnProperty("value") to be true, actually ' + !desc2.hasOwnProperty("value"));
    }
    

    verifyEqualTo(obj, "prop", getFunc());

    verifyWritable(obj, "prop", "verifySetFunc");

    verifyEnumerable(obj, "prop");

    verifyNotConfigurable(obj, "prop");

    if (!(e instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + e);
    }

}
