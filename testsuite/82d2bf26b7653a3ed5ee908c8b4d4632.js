load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright (C) 2016 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Object.getOwnPropertyDescriptors accepts string primitives.
esid: pending
author: Jordan Harband
---*/

var result = Object.getOwnPropertyDescriptors('abc');

assert.sameValue(Object.keys(result).length, 4, 'string has 4 descriptors');

assert.sameValue(result.length.configurable, false, 'length is not configurable');
assert.sameValue(result.length.enumerable, false, 'length is not enumerable');
assert.sameValue(result.length.writable, false, 'length is not writable');
assert.sameValue(result.length.value, 3, 'length is 3');

assert.sameValue(result[0].configurable, false, 'index 0 is not configurable');
assert.sameValue(result[0].enumerable, true, 'index 0 is enumerable');
assert.sameValue(result[0].writable, false, 'index 0 is not writable');
assert.sameValue(result[0].value, 'a', 'index 0 is "a"');

assert.sameValue(result[1].configurable, false, 'index 1 is not configurable');
assert.sameValue(result[1].enumerable, true, 'index 1 is enumerable');
assert.sameValue(result[1].writable, false, 'index 1 is not writable');
assert.sameValue(result[1].value, 'b', 'index 1 is "b"');

assert.sameValue(result[2].configurable, false, 'index 2 is not configurable');
assert.sameValue(result[2].enumerable, true, 'index 2 is enumerable');
assert.sameValue(result[2].writable, false, 'index 2 is not writable');
assert.sameValue(result[2].value, 'c', 'index 2 is "c"');

