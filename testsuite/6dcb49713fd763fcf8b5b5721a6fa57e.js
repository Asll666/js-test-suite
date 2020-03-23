load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Behavior when error is thrown while type coercing `index` property of
    result
es6id: 21.2.5.8
info: >
    [...]
    13. Repeat, while done is false
        a. Let result be RegExpExec(rx, S).
        [...]
    16. Repeat, for each result in results,
        [...]
        g. Let position be ToInteger(Get(result, "index")).
        h. ReturnIfAbrupt(position).
features: [Symbol.replace]
---*/

var r = /./;
var uncoercibleIndex = {
  index: {
    valueOf: function() {
      throw new Test262Error();
    }
  }
};
r.exec = function() {
  return uncoercibleIndex;
};

assert.throws(Test262Error, function() {
  r[Symbol.replace]('a', 'b');
});
