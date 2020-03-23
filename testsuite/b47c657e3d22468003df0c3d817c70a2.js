load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: The head's declaration may not contain duplicate entries
negative:
  phase: early
  type: SyntaxError
info: |
    It is a Syntax Error if the BoundNames of ForDeclaration contains any
    duplicate entries.
esid: sec-for-in-and-for-of-statements-static-semantics-early-errors
es6id: 13.7.5
---*/

for (let [x, x] of []) {}
