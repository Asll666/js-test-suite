load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      `yield` is not a reserved keyword within normal function bodies declared
      within generator function bodies.
  features: [generators]
  es6id: 12.1.1
  flags: [noStrict]
 ---*/

var result;
var obj = {
  *g() {
    function h() {
      yield = 1;
    }
  }
};

result = obj.g().next();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);
