load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2015 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Generator can be declared with GeneratorExpression syntax
es6id: 14.4
author: Sam Mikes
description: can create generator function expressions (no name)
---*/

var a = [function *(a) { yield a+1; return; }];
var f = a[0];

assert.sameValue(f.name, '');

var g = f(3);

assert.sameValue(g.next().value, 4);
assert.sameValue(g.next().done, true);