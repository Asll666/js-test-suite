load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.13.2-6-15-s
description: >
    Strict Mode - SyntaxError is thrown if the identifier arguments
    appear as the LeftHandSideExpression of a Compound Assignment
    operator(+=)
flags: [onlyStrict]
---*/

function testcase() {
        var err = null;
        var blah = arguments;
        try {
            eval("arguments += 20;");
        } catch (e) {
            err = e;
        }
        assert(err instanceof SyntaxError, 'err instanceof SyntaxError');
        assert.sameValue(blah, arguments, 'blah');
}
testcase();
