load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2014 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Assignment Operator calls PutValue(lref, rval)
es5id: S11.13.1_A5_T3
description: >
    Evaluating LeftHandSideExpression lref returns Reference type; Reference
    base value is an environment record and environment record kind is
    object environment record. PutValue(lref, rval) uses the initially
    created Reference even if the environment binding is no longer present.
    Binding in surrounding object environment record is not changed.
flags: [noStrict]
---*/

var outerScope = {x: 0};
var innerScope = {x: 1};

with (outerScope) {
  with (innerScope) {
    x = (delete innerScope.x, 2);
  }
}

if (innerScope.x !== 2) {
  $ERROR('#1: innerScope.x === 2. Actual: ' + (innerScope.x));
}
if (outerScope.x !== 0) {
  $ERROR('#2: outerScope.x === 0. Actual: ' + (outerScope.x));
}
