load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2015 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
 GeneratorMethod early SyntaxError when super is called 
 directly inside generator args
features: [generators]
es6id: 14.4.1
author: Sam Mikes
description: GeneratorMethod error if HasDirectSuper in args
negative:
  phase: early
  type: SyntaxError
---*/

var obj = {
    *foo(a = super()) {
    }
};