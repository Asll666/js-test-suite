load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.3.1
description: Subclassing the WeakMap object
info: >
  23.3.1 The WeakMap Constructor

  ...

  The WeakMap constructor is designed to be subclassable. It may be used as the
  value in an extends clause of a class definition. Subclass constructors that
  intend to inherit the specified WeakMap behaviour must include a super call to
  the WeakMap constructor to create and initialize the subclass instance with
  the internal state necessary to support the WeakMap.prototype built-in
  methods.
---*/

class WM extends WeakMap {}

var map = new WM();
var obj = {};

assert.sameValue(map.has(obj), false);

map.set(obj, 42);
assert.sameValue(map.has(obj), true);
assert.sameValue(map.get(obj), 42);
