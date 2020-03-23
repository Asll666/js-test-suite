load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Refer 13; 
    The production FunctionBody : SourceElementsopt is evaluated as follows:
es5id: 13.0-11-s
description: >
    Strict Mode - SourceElements is evaluated as strict mode code when
    the code of this FunctionBody with an inner function which is in
    strict mode
flags: [noStrict]
---*/

        function _13_0_11_fun() {
            "use strict";
            function _13_0_11_inner() {
                eval("eval = 42;");
            }
            _13_0_11_inner();
        };
assert.throws(SyntaxError, function() {
            _13_0_11_fun();
});
