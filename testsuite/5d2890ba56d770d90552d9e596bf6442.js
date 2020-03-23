load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.6
esid: sec-%typedarray%.prototype.entries
description: Return an iterator for the entries.
info: >
  22.2.3.6 %TypedArray%.prototype.entries ( )

  ...
  3. Return CreateArrayIterator(O, "key+value").
includes: [testTypedArray.js, compareArray.js]
---*/

var sample = new Int8Array([0, 42, 64]);

testWithTypedArrayConstructors(function(TA) {
  var typedArray = new TA(sample);
  var itor = typedArray.entries();

  var next = itor.next();
  assert(compareArray(next.value, [0, 0]));
  assert.sameValue(next.done, false);

  next = itor.next();
  assert(compareArray(next.value, [1, 42]));
  assert.sameValue(next.done, false);

  next = itor.next();
  assert(compareArray(next.value, [2, 64]));
  assert.sameValue(next.done, false);

  next = itor.next();
  assert.sameValue(next.value, undefined);
  assert.sameValue(next.done, true);
});