load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.25
description: Requires a [[TypedArrayName]] internal slot.
info: >
  22.2.3.25 %TypedArray%.prototype.sort ( comparefn )

  ...
  This function is not generic. The this value must be an object with a
  [[TypedArrayName]] internal slot.
  ...

  1. Let obj be the this value as the argument.
  2. Let buffer be ValidateTypedArray(obj).
  3. ReturnIfAbrupt(buffer).
  ...

  22.2.3.5.1 Runtime Semantics: ValidateTypedArray ( O )

  1. If Type(O) is not Object, throw a TypeError exception.
  2. If O does not have a [[TypedArrayName]] internal slot, throw a TypeError
  exception.
  ...
includes: [testTypedArray.js]
---*/

var TypedArrayPrototype = TypedArray.prototype;

assert.sameValue(typeof TypedArrayPrototype.sort, 'function');

assert.throws(TypeError, function() {
  TypedArrayPrototype.sort();
});