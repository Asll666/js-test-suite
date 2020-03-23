load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2016 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-applying-the-exp-operator
description: If abs(base) is 1 and exponent is +∞, the result is NaN.
---*/


var exponent = +Infinity;
var bases = [];
bases[0] = -1;
bases[1] = 1

for (var i = 0; i < bases.length; i++) {
  assert.sameValue(
    bases[i] ** exponent,
    NaN,
    bases[i] + " ** " + exponent
  );
}