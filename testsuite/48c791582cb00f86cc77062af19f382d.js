load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 24.1.2.1
description: >
  Throws a TypeError if ArrayBuffer is called as a function.
info: >
  ArrayBuffer( length )

  ArrayBuffer called with argument length performs the following steps:

  1. If NewTarget is undefined, throw a TypeError exception.
  ...
---*/

assert.throws(TypeError, function() {
  ArrayBuffer();
});

assert.throws(TypeError, function() {
  ArrayBuffer(10);
});
