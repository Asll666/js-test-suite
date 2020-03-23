load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-typedarray-buffer-byteoffset-length
description: >
  Throws a RangeError if bufferByteLength modulo elementSize ≠ 0
info: >
  22.2.4.5 TypedArray ( buffer [ , byteOffset [ , length ] ] )

  This description applies only if the TypedArray function is called with at
  least one argument and the Type of the first argument is Object and that
  object has an [[ArrayBufferData]] internal slot.

  ...
  13. If length is undefined, then
    a. If bufferByteLength modulo elementSize ≠ 0, throw a RangeError exception.
  ...
includes: [testTypedArray.js]
---*/

var buffer = new ArrayBuffer(1);

testWithTypedArrayConstructors(function(TA) {
  if (TA.BYTES_PER_ELEMENT === 1) {
    // Impossible to trigger this step here.
    return;
  }

  assert.throws(RangeError, function() {
    new TA(buffer);
  });

  assert.throws(RangeError, function() {
    new TA(buffer, 0, undefined);
  });
});
