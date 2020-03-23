load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.search (regexp)
es5id: 15.5.4.12_A1_T4
description: Call search (regexp) without arguments
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString() evaluates to "" search() evaluates to search("")
if ("".search() !== 0) {
  $ERROR('#1: "".search() === 0. Actual: '+("".search()) );
}

if ("--undefined--".search() != 0) {
  $ERROR('#1: "--undefined--".search() === 0. Actual: '+("--undefined--".search()) );
}
//
//////////////////////////////////////////////////////////////////////////////
