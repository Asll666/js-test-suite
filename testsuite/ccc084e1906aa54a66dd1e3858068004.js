load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-4-232
description: >
    Object.getOwnPropertyDescriptor - ensure that 'enumerable'
    property of returned object is data property with correct
    'writable' attribute
---*/

        var obj = { "property": "ownDataProperty" };

        var desc = Object.getOwnPropertyDescriptor(obj, "property");

            desc.enumerable = "overwriteDataProperty";

assert.sameValue(desc.enumerable, "overwriteDataProperty", 'desc.enumerable');
