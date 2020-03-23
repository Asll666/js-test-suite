load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2014 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Compound Assignment Operator calls PutValue(lref, v)
es5id: S11.13.2_A6.9_T1
description: >
    Evaluating LeftHandSideExpression lref returns Reference type; Reference
    base value is an environment record and environment record kind is
    declarative environment record. PutValue(lref, v) uses the initially
    created Reference even if a more local binding is available.
    Check operator is "x &= y".
flags: [noStrict]
---*/

function testCompoundAssignment() {
  var x = 5;
  var innerX = (function() {
    x &= (eval("var x = 2;"), 3);
    return x;
  })();

  if (innerX !== 2) {
    $ERROR('#1: innerX === 2. Actual: ' + (innerX));
  }
  if (x !== 1) {
    $ERROR('#2: x === 1. Actual: ' + (x));
  }
}
testCompoundAssignment();
