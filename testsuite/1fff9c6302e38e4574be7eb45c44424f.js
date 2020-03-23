load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    parseInt is no longer allowed to treat a leading zero as indicating
    octal.  "If radix is undefined or 0, it is assumed to be 10 except
    when the number begins with the character pairs 0x or 0X, in which
    case a radix of 16 is assumed."
es5id: 15.1.2.2_A5.1_T1
description: Check if parseInt still accepts octal
---*/

if (parseInt('010') !== 10) {
  $ERROR("parseInt should no longer accept octal");
}