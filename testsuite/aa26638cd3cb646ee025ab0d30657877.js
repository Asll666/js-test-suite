load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.3.3
description: >
  Set values with out of bounds negative start argument.
info: >
  22.1.3.3 Array.prototype.copyWithin (target, start [ , end ] )

  ...
  10. If relativeStart < 0, let from be max((len + relativeStart),0); else let
  from be min(relativeStart, len).
  ...
includes: [compareArray.js]
---*/

assert(
  compareArray(
    [0, 1, 2, 3].copyWithin(0, -10),
    [0, 1, 2, 3]
  ),
  '[0, 1, 2, 3].copyWithin(0, -10) -> [0, 1, 2, 3]'
);

assert(
  compareArray(
    [0, 1, 2, 3, 4].copyWithin(2, -10),
    [0, 1, 0, 1, 2]
  ),
  '[0, 1, 2, 3, 4].copyWithin(2, -2) -> [0, 1, 0, 1, 2]'
);

assert(
  compareArray(
    [0, 1, 2, 3, 4].copyWithin(10, -10),
    [0, 1, 2, 3, 4]
  ),
  '[0, 1, 2, 3, 4].copyWithin(10, -10) -> [0, 1, 2, 3, 4]'
);

assert(
  compareArray(
    [0, 1, 2, 3].copyWithin(-9, -10),
    [0, 1, 2, 3]
  ),
  '[0, 1, 2, 3].copyWithin(-9, -10) -> [0, 1, 2, 3]'
);