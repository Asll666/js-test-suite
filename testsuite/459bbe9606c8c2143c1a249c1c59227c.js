load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.1
description: >
    Return target.[[GetPrototypeOf]]() if trap is undefined.
---*/

var target = Object.create(Array.prototype);
var p = new Proxy(target, {});

assert.sameValue(Object.getPrototypeOf(p), Array.prototype);
