load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 19.1.2.18
description: Object.setPrototypeOf invoked with a non-extensible object
info: >
    1. Let O be RequireObjectCoercible(O).
    2. ReturnIfAbrupt(O).
    3. If Type(proto) is neither Object nor Null, throw a TypeError exception.
    4. If Type(O) is not Object, return O.
    5. Let status be O.[[SetPrototypeOf]](proto).
    6. ReturnIfAbrupt(status).
    7. If status is false, throw a TypeError exception.
    8. Return O.
---*/

var propValue = {};
var newProto = {
  test262prop: propValue
};
var obj = {};
var result;

result = Object.setPrototypeOf(obj, newProto);

assert.sameValue(result, obj, 'Return value');
assert.sameValue(Object.hasOwnProperty.call(obj, 'test262prop'), false);
assert.sameValue(obj.test262prop, propValue);
