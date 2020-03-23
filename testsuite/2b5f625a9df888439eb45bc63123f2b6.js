load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.7.4-1
description: "Number prototype object: its [[Class]] must be 'Number'"
---*/

  var numProto = Object.getPrototypeOf(new Number(42));
  var s = Object.prototype.toString.call(numProto );

assert.sameValue(s, '[object Number]', 's');
