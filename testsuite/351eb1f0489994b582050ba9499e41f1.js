load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 24.2.2.1
esid: sec-dataview-buffer-byteoffset-bytelength
description: >
  Return abrupt from newTarget's custom constructor prototype
info: |
  24.2.2.1 DataView (buffer, byteOffset, byteLength )

  ...
  12. Let O be ? OrdinaryCreateFromConstructor(NewTarget, "%DataViewPrototype%",
  « [[DataView]], [[ViewedArrayBuffer]], [[ByteLength]], [[ByteOffset]] »).
  ...
  17. Return O.

  9.1.13 OrdinaryCreateFromConstructor ( constructor, intrinsicDefaultProto [ ,
  internalSlotsList ] )

  ...
  2. Let proto be ? GetPrototypeFromConstructor(constructor,
  intrinsicDefaultProto).
  3. Return ObjectCreate(proto, internalSlotsList).

  9.1.15 GetPrototypeFromConstructor ( constructor, intrinsicDefaultProto )

  ...
  3. Let proto be ? Get(constructor, "prototype").
  ...
features: [Reflect.construct]
---*/

var buffer = new ArrayBuffer(8);

var newTarget = function() {}.bind(null);
Object.defineProperty(newTarget, "prototype", {
  get() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  Reflect.construct(DataView, [buffer, 0], newTarget);
});
