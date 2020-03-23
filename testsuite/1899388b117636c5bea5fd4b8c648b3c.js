load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-with-statement-static-semantics-early-errors
es6id: 13.11.1
description:
  A labelled function declaration is never permitted in the Statement position
info: |
  WithStatementa: with ( Expression ) Statement

  [...]
  - It is a Syntax Error if IsLabelledFunction(Statement) is true.

  NOTE It is only necessary to apply the second rule if the extension specified
       in B.3.2 is implemented.

  In the absence of Annex B.3.2, a SyntaxError should be produced due to the
  labelled function declaration itself.
negative:
  phase: early
  type: SyntaxError
---*/

with ({}) label1: label2: function test262() {}
