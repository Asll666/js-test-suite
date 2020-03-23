load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    [...]
    6. Else, let handlerResult be Call(handler, undefined, «argument»).
es6id: S25.4.2.1_A3.2_T2
author: Sam Mikes
description: >
    "rejected" handler invoked correctly in strict mode
flags: [async, onlyStrict]
---*/

var expectedThis = undefined,
    obj = {};

var p = Promise.reject(obj).then(function () {
    $DONE("Unexpected fulfillment; expected rejection.");
}, function(arg) {
    if (this !== expectedThis) {
        $DONE("'this' must be undefined, got " + this);
        return;
    }

    if (arg !== obj) {
        $DONE("Expected promise to be rejected with obj, actually " + arg);
        return;
    }

    if (arguments.length !== 1) {
        $DONE('Expected handler function to be called with exactly 1 argument.');
        return;
    }

    $DONE();
});
