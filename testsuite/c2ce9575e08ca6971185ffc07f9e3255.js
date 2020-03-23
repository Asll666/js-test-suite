load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2015 Leonardo Balter. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
es6id: 22.1.2.1
description: Throws a TypeError if mapFn is not callable (Symbol)
info: >
  22.1.2.1 Array.from ( items [ , mapfn [ , thisArg ] ] )

  ...
  2. If mapfn is undefined, let mapping be false.
  3. else
    a. If IsCallable(mapfn) is false, throw a TypeError exception.
    ...
features:
  - Symbol
---*/

assert.throws(TypeError, function() {
  Array.from([], Symbol('1'));
});
