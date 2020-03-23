load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise.all expects an iterable argument;
    fails if GetIterator returns an abrupt completion.
es6id: S25.4.4.1_A3.1_T3
author: Sam Mikes
description: Promise.all((throw on GetIterator)) returns Promise rejected with TypeError
features: [Symbol.iterator]
flags: [async]
---*/

var iterThrows = {};
Object.defineProperty(iterThrows, Symbol.iterator, {
    get: function () {
        throw new Error("abrupt completion");
    }
});

Promise.all(iterThrows).then(function () {
    $ERROR('Promise unexpectedly fulfilled: Promise.all(iterThrows) should throw TypeError');
},function (err) {
    if (!(err instanceof Error)) {
        $ERROR('Expected promise to be rejected with error, got ' + err);
    }
}).then($DONE,$DONE);
