load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.8-4-3
description: Object.seal - the extension of 'O' is prevented already
---*/

        var obj = {};

        obj.foo = 10; // default value of attributes: writable: true, configurable: true, enumerable: true
        var preCheck = Object.isExtensible(obj);
        Object.preventExtensions(obj);
        Object.seal(obj);

assert(preCheck, 'preCheck !== true');
assert(Object.isSealed(obj), 'Object.isSealed(obj) !== true');
