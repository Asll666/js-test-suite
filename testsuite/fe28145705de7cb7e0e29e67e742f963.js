load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-5
description: Array.prototype.lastIndexOf must return correct index(Object)
---*/

  var obj1 = {toString:function (){return "false"}};
  var obj2 = {toString:function (){return "false"}};
  var obj3 = obj1;
  var a = new Array(obj2,obj1,obj3,false,undefined,0,false,null,{toString:function (){return "false"}},"false");

assert.sameValue(a.lastIndexOf(obj3), 2, 'a.lastIndexOf(obj3)');