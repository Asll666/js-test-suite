load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 14.5.1
description: >
    ClassElement : static MethodDefinition

    It is a Syntax Error if HasDirectSuper of MethodDefinition is true.

    (set)

negative:
  phase: early
  type: SyntaxError
---*/
class A {
  static set method(_) {
    super();
  }
}

