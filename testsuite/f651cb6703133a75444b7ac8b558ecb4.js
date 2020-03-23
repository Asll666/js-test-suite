load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Caitlin Potter <caitp@igalia.com>
esid: 14.4
description: >
  AwaitExpressions are valid operands to yield expressions.
flags: [async]
---*/

var iter = (async function*() {
  yield await "a";
})();

iter.next().then(function(result) {
  assert.sameValue(result.value, "a", 'First result `value`');
  assert.sameValue(result.done, false, 'First result `done` flag');
}).then(undefined, $DONE);

iter.next().then(function(result) {
  assert.sameValue(result.value, undefined, 'Second result `value`');
  assert.sameValue(result.done, true, 'Second result `done` flag');
}).then($DONE, $DONE);