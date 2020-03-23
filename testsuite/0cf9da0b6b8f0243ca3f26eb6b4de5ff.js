load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-4-4
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\u000Babc)
---*/

assert.sameValue("\u000Babc".trim(), "abc", '"\u000Babc".trim()');
