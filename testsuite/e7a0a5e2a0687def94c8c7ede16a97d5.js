load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-10-3
description: Array.prototype.filter - subclassed array when length is reduced
---*/

  foo.prototype = new Array(1, 2, 3);
  function foo() {}
  var f = new foo();
  f.length = 1;
  
  function cb(){return true;}
  var a = f.filter(cb);
  

assert(Array.isArray(a), 'Array.isArray(a) !== true');
assert.sameValue(a.length, 1, 'a.length');
