load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: URI tests
es5id: 15.1.3.4_A4_T1
description: Checking ENGLISH ALPHABET
---*/

//CHECK#1
if (encodeURIComponent("http://unipro.ru/0123456789") !== "http%3A%2F%2Funipro.ru%2F0123456789") {
  $ERROR('#1: http://unipro.ru/0123456789');
}

//CHECK#2
if (encodeURIComponent("aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ") !== "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ") {
  $ERROR('#2: aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ');
}

//CHECK#3
if (encodeURIComponent(";/?:@&=+$,") !== "%3B%2F%3F%3A%40%26%3D%2B%24%2C") {
  $ERROR('#3: ');
}
