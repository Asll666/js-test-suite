load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.getint8
es6id: 24.2.4.7
description: >
  Throws a RangeError if getIndex < 0
info: |
  24.2.4.7 DataView.prototype.getInt8 ( byteOffset )

  1. Let v be the this value.
  2. Return ? GetViewValue(v, byteOffset, true, "Int8").

  24.2.1.1 GetViewValue ( view, requestIndex, isLittleEndian, type )

  ...
  4. Let getIndex be ? ToIndex(requestIndex).
  ...
---*/

var buffer = new ArrayBuffer(12);
var sample = new DataView(buffer, 0);

assert.throws(RangeError, function() {
  sample.getInt8(-1);
}, "-1");

assert.throws(RangeError, function() {
  sample.getInt8(-Infinity);
}, "-Infinity");