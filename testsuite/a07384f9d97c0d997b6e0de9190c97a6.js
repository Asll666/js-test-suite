load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2014 Ryan Lewis. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.2.2.18
author: Ryan Lewis
description: Math.hypot should return 0 if called with no arguments.
---*/

assert.sameValue(Math.hypot(), 0, 'Math.hypot()');
