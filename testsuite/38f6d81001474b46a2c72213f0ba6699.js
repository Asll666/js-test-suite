load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.10
description: >
    Trap return is an abrupt.
info: >
    9. Let booleanTrapResult be ToBoolean(Call(trap, handler, «target, P»)).
    10. ReturnIfAbrupt(booleanTrapResult).
---*/

var p = new Proxy({}, {
    deleteProperty: function(t, prop) {
        throw new Test262Error();
    }
});

assert.throws(Test262Error, function() {
    delete p.attr;
});
