load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-symbol-constructor
es6id: 19.4.1
description: The value "undefined" is reported as the empty string
info: |
    1. If NewTarget is not undefined, throw a TypeError exception.
    2. If description is undefined, let descString be undefined.
    2. Else, let descString be ? ToString(description).
    3. Return a new unique Symbol value whose [[Description]] value is
       descString.

    19.4.3.2.1 Runtime Semantics: SymbolDescriptiveString

    1. Assert: Type(sym) is Symbol.
    2. Let desc be sym's [[Description]] value.
    3. If desc is undefined, let desc be the empty string.
    4. Assert: Type(desc) is String.
    5. Return the result of concatenating the strings "Symbol(", desc, and ")".
---*/

assert.sameValue(Symbol().toString(), 'Symbol()', 'implicit value');
assert.sameValue(Symbol(undefined).toString(), 'Symbol()', 'explicit value');
