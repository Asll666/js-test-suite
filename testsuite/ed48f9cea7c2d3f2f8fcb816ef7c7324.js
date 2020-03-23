load("924921a1ecafccfb4db6dd25ea7b14f2.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    Resolving with a non-object value after invocation of the executor function
es6id: 25.4.3.1
info: >
    [...]
    8. Let resolvingFunctions be CreateResolvingFunctions(promise).
    9. Let completion be Call(executor, undefined,
       «resolvingFunctions.[[Resolve]], resolvingFunctions.[[Reject]]»).

    25.4.1.3.2 Promise Resolve Functions
    7. If Type(resolution) is not Object, then
       a. Return FulfillPromise(promise, resolution).
flags: [async]
---*/

var resolve;
var promise = new Promise(function(_resolve) {
  resolve = _resolve;
});

promise.then(function(value) {
    if (value !== 45) {
      $DONE('The promise should be fulfilled with the provided value.');
      return;
    }

    $DONE();
  }, function() {
    $DONE('The promise should not be rejected.');
  });

resolve(45);
