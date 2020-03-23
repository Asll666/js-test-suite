load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    If argArray is either an array or an arguments object,
    the function is passed the (ToUint32(argArray.length)) arguments argArray[0], argArray[1],...,argArray[ToUint32(argArray.length)-1]
es5id: 15.3.4.3_A7_T7
description: >
    argArray is (null, arguments), inside function call without
    declaration used
---*/

(function (){
  Function("a1,a2,a3","this.shifted=a1+a2+a3;").apply(null,arguments);
})("",1,2);

//CHECK#1
if (this["shifted"] !== "12") {
  $ERROR('#1: If argArray is either an array or an arguments object, the function is passed the...');
}
