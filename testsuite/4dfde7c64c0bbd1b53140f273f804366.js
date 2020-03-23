load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.10.1-4-s
description: with statement in strict mode throws SyntaxError (strict Function)
flags: [noStrict]
---*/


assert.throws(SyntaxError, function() {
    var f = Function("\
                      \'use strict\';  \
                      var o = {}; \
                      with (o) {};\
                    ");
});