load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 25.1.2.1
description: Property descriptor
info: >
    ES6 Section 17

    Every other data property described in clauses 18 through 26 and in Annex
    B.2 has the attributes { [[Writable]]: true, [[Enumerable]]: false,
    [[Configurable]]: true } unless otherwise specified.
features: [Symbol.iterator]
includes: [propertyHelper.js]
---*/

var IteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf([][Symbol.iterator]())
);

assert.sameValue(typeof IteratorPrototype[Symbol.iterator], 'function');
verifyNotEnumerable(IteratorPrototype, Symbol.iterator);
verifyWritable(IteratorPrototype, Symbol.iterator);
verifyConfigurable(IteratorPrototype, Symbol.iterator);
