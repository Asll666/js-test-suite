load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-151
description: >
    Object.defineProperty - 'Attributes' is the global object that
    uses Object's [[Get]] method to access the 'value' property
    (8.10.5 step 5.a)
---*/

        var obj = {};

            this.value = "global";

            Object.defineProperty(obj, "property", this);

assert.sameValue(obj.property, "global", 'obj.property');