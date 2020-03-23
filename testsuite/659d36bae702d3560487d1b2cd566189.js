load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    15.5.5.2 defines [[GetOwnProperty]] for Strings. It supports using indexing
    notation to look up non numeric property names.
es5id: 15.5.5.5.2-3-3
description: >
    String object indexing returns undefined if the numeric index
    (NaN) is not an array index
---*/

  var s = new String("hello world");

assert.sameValue(s[NaN], undefined, 's[NaN]');
