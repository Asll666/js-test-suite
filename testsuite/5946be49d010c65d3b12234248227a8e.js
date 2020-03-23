load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.14
description: >
    Throws a TypeError if trap result is not an Object: undefined
info: >
    [[Construct]] ( argumentsList, newTarget)

    11. If Type(newObj) is not Object, throw a TypeError exception.
---*/

function Target() {
    this.attr = "done";
};
var P = new Proxy(Target, {
    construct: function() {
        return undefined;
    }
});

assert.throws(TypeError, function() {
    new P();
});