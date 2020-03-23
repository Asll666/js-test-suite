load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-runtime-semantics-classdefinitionevaluation
es6id: 14.5.14
description: >
    Runtime Semantics: ClassDefinitionEvaluation

    If superclass is null, then
      Let protoParent be null.
      Let constructorParent be the intrinsic object %FunctionPrototype%.
---*/
class Foo extends null {
  constructor() {
    return {};
  }
}

var f = new Foo();

assert.sameValue(Object.getPrototypeOf(f), Object.prototype);
