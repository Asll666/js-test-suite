load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The call method takes one or more arguments, thisArg and (optionally) arg1, arg2 etc, and performs
    a function call using the [[Call]] property of the object
es5id: 15.3.4.4_A6_T2
description: Argunemts of call function is (null,[3,2,1])
---*/

new Function("a1,a2","a3","this.shifted=a1;").call(null,[3,2,1]);

//CHECK#1
if (this["shifted"].length !== 3) {
  $ERROR('#1: The call method takes one or more arguments, thisArg and (optionally) arg1, arg2 etc, and performs a function call using the [[Call]] property of the object');
}

//CHECK#2
if ((this["shifted"][0] !== 3)||(this["shifted"][1] !== 2)||(this["shifted"][2] !== 1)) {
  $ERROR('#2: The call method takes one or more arguments, thisArg and (optionally) arg1, arg2 etc, and performs a function call using the [[Call]] property of the object');
}
