load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-performeval
description: >
    Direct eval code creates `class` bindings prior to evaluation, but does not
    initialize them.
info: |
    [...]
    14. For each element d in lexDeclarations do
        a. NOTE Lexically declared names are only instantiated here but not
           initialized.
        b. For each element dn of the BoundNames of d do
           i. If IsConstantDeclaration of d is true, then
              1. Perform ? lexEnvRec.CreateImmutableBinding(dn, true).
           ii. Else,
               2. Perform ? lexEnvRec.CreateMutableBinding(dn, false).
    [...]
features: [class]
---*/

assert.throws(ReferenceError, function() {
  eval('typeof C; class C {}');
});
