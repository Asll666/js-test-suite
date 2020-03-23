load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.3.1-2-3-s
description: >
    Strict Mode - SyntaxError is not thrown if the identifier
    'arguments[...]' appears as a PostfixExpression(arguments++)
flags: [onlyStrict]
---*/

function testcase() {
        arguments[1] = 7;
        arguments[1]++;
        assert.sameValue(arguments[1], 8, 'arguments[1]');
    }
testcase();
