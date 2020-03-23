load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.10
description: >
    Throws when trap is not callable.
info: >
    9.5.10 [[Delete]] (P)

    6. Let trap be GetMethod(handler, "deleteProperty").
    ...

    7.3.9 GetMethod (O, P)

    5. If IsCallable(func) is false, throw a TypeError exception.
---*/

var p = new Proxy({}, {
    deleteProperty: {}
});

assert.throws(TypeError, function() {
    delete p.attr;
});
