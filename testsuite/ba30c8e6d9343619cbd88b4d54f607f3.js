load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * DecimalLiteral :: HexIntegerLiteral
 *
 * @path ch07/7.8/7.8.3/S7.8.3_A5.1_T3.js
 * @description HexIntegerLiteral :: 0x NonZeroDigit Digits
 */

//CHECK#0
if (0x0 !== 0) {
  $ERROR('#0: 0x0 === 0');
}

//CHECK#1
if (0x1 !== 1) {
  $ERROR('#1: 0x1 === 1');
}

//CHECK#2
if (0x10 !== 16) {
  $ERROR('#2: 0x10 === 16');
}

//CHECK3
if (0x100 !== 256) {
  $ERROR('3: 0x100 === 256');
}

//CHECK#4
if (0x1000 !== 4096) {
  $ERROR('#4: 0x1000 === 4096');
}

//CHECK#5
if (0x10000 !== 65536) {
  $ERROR('#5: 0x10000 === 65536');
}

//CHECK#6
if (0x100000 !== 1048576) {
  $ERROR('#6: 0x100000 === 1048576');
}

//CHECK#7
if (0x1000000 !== 16777216) {
  $ERROR('#7: 0x1000000 === 16777216');
}

//CHECK#8
if (0x10000000 !== 268435456) {
  $ERROR('#8: 0x10000000 === 268435456');
}
