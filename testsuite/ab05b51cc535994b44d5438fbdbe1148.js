load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: NonEscapeSequence is not EscapeCharacter
es5id: 7.8.4_A4.3_T1
description: "EscapeCharacter :: DecimalDigits :: 1"
negative:
  phase: early
  type: SyntaxError
flags: [onlyStrict]
---*/

"\1"
