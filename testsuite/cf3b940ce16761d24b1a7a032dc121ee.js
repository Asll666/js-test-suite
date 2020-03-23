load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: Promise.all([]) is resolved with Promise for a new empty array
es6id: 25.4.4.1_A2.3_T3
author: Sam Mikes
description: Promise.all([]) is resolved with a Promise for a new array
flags: [async]
---*/

var arg = [];

Promise.all(arg).then(function (result) {
    if(result === arg) {
        $ERROR("expected a new array from Promise.all but argument was re-used");
    }
}).then($DONE, $DONE);
