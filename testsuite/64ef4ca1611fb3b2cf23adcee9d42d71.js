load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-module-namespace-exotic-objects-preventextensions
description: The [[PreventExtensions]] internal method returns `true`
flags: [module]
features: [Reflect]
---*/

import * as ns from './prevent-extensions.js';

// This invocation should not throw an exception
Object.preventExtensions(ns);

assert.sameValue(Reflect.preventExtensions(ns), true);
