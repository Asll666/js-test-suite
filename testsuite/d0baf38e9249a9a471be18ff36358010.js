load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.2.3.2
description: >
    Set.prototype.clear ( )

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(Set.prototype.clear.name, "clear", "The value of `Set.prototype.clear.name` is `'clear'`");

verifyNotEnumerable(Set.prototype.clear, "name");
verifyNotWritable(Set.prototype.clear, "name");
verifyConfigurable(Set.prototype.clear, "name");
