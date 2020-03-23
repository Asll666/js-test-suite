load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 14.5
description: >
    class super in getter
---*/
class B {
  method() {
    return 1;
  }
  get x() {
    return 2;
  }
}
class C extends B {
  get y() {
    assert.sameValue(super.x, 2, "The value of `super.x` is `2`");
    return super.method();
  }
}
assert.sameValue(new C().y, 1, "The value of `new C().y` is `1`");