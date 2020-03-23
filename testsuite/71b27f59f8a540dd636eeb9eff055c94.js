load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If Z is empty, return NaN
es5id: 15.1.2.2_A7.1_T1
description: Complex test. R in [2, 36]
---*/

//CHECK#
for (var i = 2; i <= 36; i++) {
  assert.sameValue(parseInt("$string", i), NaN);
}
