load("924921a1ecafccfb4db6dd25ea7b14f2.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 25.4.4.5
description: >
  Resolve function is called after Promise constructor returns.
info: >
  Promise.resolve ( x )

  ...
  4. Let promiseCapability be NewPromiseCapability(C).
  5. ReturnIfAbrupt(promiseCapability).
  6. Let resolveResult be Call(promiseCapability.[[Resolve]], undefined, «x»).
  7. ReturnIfAbrupt(resolveResult).
  ...
---*/

var callCount = 0;
var object = {};

Promise.resolve.call(function(executor) {
  function resolve(v) {
    callCount += 1;
    assert.sameValue(v, object);
  }
  executor(resolve, $ERROR);
  assert.sameValue(callCount, 0, "callCount before returning from constructor");
}, object);

assert.sameValue(callCount, 1, "callCount after call to resolve()");
