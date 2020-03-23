load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The production IterationStatement: "for (var VariableDeclarationNoIn in
    Expression) Statement"
es5id: 12.6.4_A3.1
description: >
    Using an array as an Expression is appropriate. Here Expression is
    an array of numbers
---*/

var __str, __evaluated, arr;
__str="";

__evaluated = eval("for(var ind in (arr=[2,1,4,3]))__str+=arr[ind]");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__evaluated !== __str) {
	$ERROR('#1: __evaluated === __str. Actual:  __evaluated ==='+ __evaluated  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!( (__str.indexOf("2")!==-1)&&(__str.indexOf("1")!==-1)&&(__str.indexOf("4")!==-1)&&(__str.indexOf("3")!==-1) )) {
	$ERROR('#2: (__str.indexOf("2")!==-1)&&(__str.indexOf("1")!==-1)&&(__str.indexOf("4")!==-1)&&(__str.indexOf("3")!==-1)');
}
//
//////////////////////////////////////////////////////////////////////////////