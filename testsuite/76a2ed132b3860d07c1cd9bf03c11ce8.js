load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The production CharacterClassEscape :: d evaluates by returning the
    ten-element set of characters containing the characters 0 through 9
    inclusive
es5id: 15.10.2.12_A5_T3
description: RUSSIAN ALPHABET
---*/

var regexp_d = /\d/;

//CHECK#0410-042F
var result = true;  
for (var alpha = 0x0410; alpha <= 0x042F; alpha++) {
  if (regexp_d.exec(String.fromCharCode(alpha)) !== null) {
    result = false;
  }
}

if (result !== true) {
  $ERROR('#1: RUSSIAN CAPITAL ALPHABET');
}

//CHECK#0430-044F
var result = true; 
for (alpha = 0x0430; alpha <= 0x044F; alpha++) {
  if (regexp_d.exec(String.fromCharCode(alpha)) !== null) {
    result = false;
  }
}

if (result !== true) {
  $ERROR('#2: russian small alphabet');
}
