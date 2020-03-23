load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-get-regexp.prototype.source
description: >
  Return value of `undefined` when the "this" value is the RegExp prototype
  object
info: |
  1. Let R be the this value.
  2. If Type(R) is not Object, throw a TypeError exception.
  3. If R does not have an [[OriginalFlags]] internal slot, then
     a. If SameValue(R, %RegExpPrototype%) is true, return "(?:)".
---*/

var get = Object.getOwnPropertyDescriptor(RegExp.prototype, 'source').get;

assert.sameValue(get.call(RegExp.prototype), '(?:)');