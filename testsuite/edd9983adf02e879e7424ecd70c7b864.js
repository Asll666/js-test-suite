load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 25.4.3
description: Subclassing the Promise object
info: >
  25.4.3 The Promise Constructor

  ...

  The Promise constructor is designed to be subclassable. It may be used as the
  value in an extends clause of a class definition. Subclass constructors that
  intend to inherit the specified Promise behaviour must include a super call
  to the Promise constructor to create and initialize the subclass instance with
  the internal state necessary to support the Promise and Promise.prototype
  built-in methods.
---*/

class Prom extends Promise {}

assert.throws(TypeError, function() {
  new Prom();
});

var calledExecutor = false;

var prom1 = new Prom(function(resolve) {
  calledExecutor = true;
  assert.sameValue(arguments.length, 2);
  assert(arguments[0] === Promise.resolve);
  assert(arguments[1] === Promise.reject);
});

assert(calledExecutor);
