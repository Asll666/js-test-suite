load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The call method takes one or more arguments, thisArg and (optionally) arg1, arg2 etc, and performs
    a function call using the [[Call]] property of the object
es5id: 15.3.4.4_A6_T8
description: >
    Argunemts of call function is (this, arguments,"",2), inside
    function call without declaration used
---*/

(function (){
  Function("a1,a2,a3","this.shifted=a1.length+a2+a3;").call(this,arguments,"",2);
})("",4,2,null);

//CHECK#2
if (this["shifted"] !== "42") {
  $ERROR('#2: The call method takes one or more arguments, thisArg and (optionally) arg1, arg2 etc, and performs a function call using the [[Call]] property of the object');
}
