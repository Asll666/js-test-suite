load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-5
description: >
    Array.prototype.filter doesn't consider newly added elements in
    sparse array
---*/

  function callbackfn(val, idx, obj)
  {
    srcArr[1000] = 3;
    return true;
  }

  var srcArr = new Array(10);
  srcArr[1] = 1;
  srcArr[2] = 2;
  var resArr = srcArr.filter(callbackfn);

assert.sameValue(resArr.length, 2, 'resArr.length');
