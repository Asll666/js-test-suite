load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
info: >
    If Result(3).type is normal and its completion value is empty,
    then return the value undefined
esid: sec-performeval
es5id: 15.1.2.1_A3.2_T5
description: Switch statement
---*/

assert.sameValue((0,eval)("switch(1){}"), undefined);
