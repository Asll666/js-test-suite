load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.3.4.42
description: >
  Date.prototype.toTimeString.name is "toTimeString".
info: >
  Date.prototype.toTimeString ( )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

assert.sameValue(Date.prototype.toTimeString.name, "toTimeString");

verifyNotEnumerable(Date.prototype.toTimeString, "name");
verifyNotWritable(Date.prototype.toTimeString, "name");
verifyConfigurable(Date.prototype.toTimeString, "name");
