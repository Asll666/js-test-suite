load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Object.prototype.valueOf.length property has the attribute DontEnum
es5id: 15.2.4.4_A8
description: >
    Checking if enumerating the Object.prototype.valueOf.length
    property fails
---*/

//CHECK#0
if (!(Object.prototype.valueOf.hasOwnProperty('length'))) {
  $ERROR('#0: the Object.prototype.valueOf has length property.');
}


// CHECK#1
if (Object.prototype.valueOf.propertyIsEnumerable('length')) {
  $ERROR('#1: the Object.prototype.valueOf.length property has the attributes DontEnum');
}

// CHECK#2
for (var p in Object.prototype.valueOf){
  if (p==="length")
        $ERROR('#2: the Object.prototype.valueOf.length property has the attributes DontEnum');
}
//
