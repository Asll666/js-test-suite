load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-functiondeclarationinstantiation
es6id: 9.2.12
description: >
  Arguments are "unmapped" when paramater list is non-simple due to "default"
  parameter
info: |
  [...]
  9. Let simpleParameterList be IsSimpleParameterList of formals.
  [...]
  22. If argumentsObjectNeeded is true, then
      a. If strict is true or if simpleParameterList is false, then
         i. Let ao be CreateUnmappedArgumentsObject(argumentsList).
      [...]
---*/

var value;

function dflt(a, b = 0) {
  arguments[0] = 2;
  value = a;
}

dflt(1);

assert.sameValue(value, 1);