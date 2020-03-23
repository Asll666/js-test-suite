load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-8-9
description: >
    Array.prototype.forEach doesn't call callbackfn if 'length' is 0
    (subclassed Array, length overridden with [0]
---*/

  foo.prototype = new Array(1, 2, 3);
  function foo() {}
  var f = new foo();
  
  f.length = [0];
  
  // objects inherit the default valueOf method of the Object object;
  // that simply returns the itself. Since the default valueOf() method
  // does not return a primitive value, ES next tries to convert the object
  // to a number by calling its toString() method and converting the
  // resulting string to a number.
  //
  // The toString( ) method on Array converts the array elements to strings,
  // then returns the result of concatenating these strings, with commas in
  // between. An array with no elements converts to the empty string, which
  // converts to the number 0. If an array has a single element that is a
  // number n, the array converts to a string representation of n, which is
  // then converted back to n itself. If an array contains more than one element,
  // or if its one element is not a number, the array converts to NaN.

  var callCnt = 0;
  function cb(){callCnt++}
  var i = f.forEach(cb);  

assert.sameValue(callCnt, 0, 'callCnt');
