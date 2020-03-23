load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 24.2.2.1
esid: sec-dataview-buffer-byteoffset-bytelength
description: >
  Throws RangeError if offset + viewByteLength > bufferByteLength
info: |
  24.2.2.1 DataView (buffer, byteOffset, byteLength )

  ...
  10. If byteLength is undefined, then
    ...
  11. Else,
    a. Let viewByteLength be ? ToLength(byteLength).
    b. If offset+viewByteLength > bufferByteLength, throw a RangeError
    exception.
  ...
---*/

var buffer = new ArrayBuffer(3);

assert.throws(RangeError, function() {
  new DataView(buffer, 0, 4);
}, "offset: 0, length 4");

assert.throws(RangeError, function() {
  new DataView(buffer, 1, 3);
}, "offset: 1, length: 3");

assert.throws(RangeError, function() {
  new DataView(buffer, 2, 2);
}, "offset: 2, length: 2");

assert.throws(RangeError, function() {
  new DataView(buffer, 3, 1);
}, "offset: 3, length: 1");

assert.throws(RangeError, function() {
  new DataView(buffer, 4, 0);
}, "offset: 4, length: 0");

assert.throws(RangeError, function() {
  new DataView(buffer, 4, -1);
}, "offset: 4, length: -1");

assert.throws(RangeError, function() {
  new DataView(buffer, 4, -Infinity);
}, "offset: 4, length: -Infinity");

assert.throws(RangeError, function() {
  new DataView(buffer, 0, Infinity);
}, "offset: 0, length: Infinity");