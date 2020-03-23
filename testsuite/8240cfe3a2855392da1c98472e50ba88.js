load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-symbol-constructor
es6id: 19.4.1
description: The Symbol constructor returns a unique value
info: |
    1. If NewTarget is not undefined, throw a TypeError exception.
    2. If description is undefined, let descString be undefined.
    2. Else, let descString be ? ToString(description).
    3. Return a new unique Symbol value whose [[Description]] value is
       descString.
---*/

assert.notSameValue(Symbol(''), Symbol(''), 'empty string');
assert.notSameValue(Symbol(), Symbol(), 'undefined');
assert.notSameValue(Symbol(null), Symbol(null), 'null value');
assert.notSameValue(Symbol('x'), Symbol('x'), 'string "x"');
