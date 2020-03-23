load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2011 Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3_A1
description: >
    When calling a strict anonymous function as a  function, "this"
    should be bound to undefined.
flags: [onlyStrict]
---*/

var that = (function() { return this; })();
if (that !== undefined) {
  $ERROR('#1: "this" leaked as: ' + that);
}
