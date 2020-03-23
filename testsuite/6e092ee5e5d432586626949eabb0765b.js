load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("240f1a1aa8450c05b40d39bbb5f5d6b4.js");
// Copyright (C) 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.1
description: >
    for-in to acquire properties from array
includes: [arrayContains.js]
---*/
function props(x) {
  var array = [];
  for (let p in x) array.push(p);
  return array;
}

assert.sameValue(props([]).length, 0);
assert.sameValue(props([1]).length, 1);
assert.sameValue(props([1,2]).length, 2);
assert.sameValue(props([1,2,3]).length, 3);

assert(arrayContains(props([1]), ["0"]));
assert(arrayContains(props([1,2]), ["0", "1"]));
assert(arrayContains(props([1,2,3]), ["0", "1", "2"]));
