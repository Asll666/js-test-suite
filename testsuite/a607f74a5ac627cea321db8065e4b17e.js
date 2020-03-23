load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-8-4
description: >
    Array.prototype.every returns true if 'length' is 0 (subclassed
    Array, length overridden to 0 (type conversion))
---*/

  foo.prototype = new Array(1, 2, 3);
  function foo() {}
  var f = new foo();
  f.length = 0;

  function cb(){}
  var i = f.every(cb);
  

assert.sameValue(i, true, 'i');