load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-7-3
description: >
    Array.prototype.some doesn't visit deleted elements in array after
    it is called
---*/

  function callbackfn(val, idx, obj)
  {
    delete arr[2];
    if(val !== 3)
      return false;
    else 
      return true;
  }

  var arr = [1,2,3,4,5];
  

assert.sameValue(arr.some(callbackfn), false, 'arr.some(callbackfn)');
