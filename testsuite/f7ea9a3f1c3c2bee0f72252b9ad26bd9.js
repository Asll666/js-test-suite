load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.filter
description: >
  Custom @@species constructor may return a different TypedArray
info: >
  22.2.3.9 %TypedArray%.prototype.filter ( callbackfn [ , thisArg ] )

  ...
  10. Let A be ? TypedArraySpeciesCreate(O, « captured »).
  ...

  22.2.4.7 TypedArraySpeciesCreate ( exemplar, argumentList )

  ...
  3. Let constructor be ? SpeciesConstructor(exemplar, defaultConstructor).
  4. Return ? TypedArrayCreate(constructor, argumentList).

  7.3.20 SpeciesConstructor ( O, defaultConstructor )

  ...
  5. Let S be ? Get(C, @@species).
  ...
  7. If IsConstructor(S) is true, return S.
  ...

  22.2.4.6 TypedArrayCreate ( constructor, argumentList )

  1. Let newTypedArray be ? Construct(constructor, argumentList).
  2. Perform ? ValidateTypedArray(newTypedArray).
  3. If argumentList is a List of a single Number, then
    ...
  4. Return newTypedArray.
includes: [testTypedArray.js, compareArray.js]
features: [Symbol.species]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([40]);
  var otherTA = TA === Int8Array ? Int16Array : Int8Array;
  var other = new otherTA([1, 0, 1]);
  var result;

  sample.constructor = {};
  sample.constructor[Symbol.species] = function() {
    return other;
  };

  result = sample.filter(function() {});

  assert.sameValue(result, other, "returned another typedarray");
  assert(compareArray(result, [1, 0, 1]), "the returned object is preserved");
});
