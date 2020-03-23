load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 25.4.5.3
description: >
  Throws a TypeError if `this` is not a Promise object.
info: >
  Promise.prototype.then ( onFulfilled , onRejected )

  1. Let promise be the this value.
  2. If IsPromise(promise) is false, throw a TypeError exception.
  ...
---*/

var object = {
  get constructor() {
    $ERROR("get constructor called");
  }
};

assert.throws(TypeError, function() {
  Promise.prototype.then.call(object);
});
