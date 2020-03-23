load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-internalizejsonproperty
es6id: 24.3.1.1
description: >
  Abrupt completion when reviver function returns an abrupt completion
info: |
  JSON.parse ( text [ , reviver ] )

  [...]
  7. If IsCallable(reviver) is true, then
     [...]
     e. Return ? InternalizeJSONProperty(root, rootName).

  Runtime Semantics: InternalizeJSONProperty ( holder, name)

  [...]
  3. Return ? Call(reviver, holder, « name, val »).
---*/

assert.throws(Test262Error, function() {
  JSON.parse('0', function() {
    throw new Test262Error();
  });
});
