load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.1.1.3-1
description: undefined is not writable, should not throw in non-strict mode
flags: [noStrict]
---*/

undefined = 5;
assert.sameValue(typeof undefined, "undefined", 'typeof undefined');

var nosuchproperty;
assert.sameValue(nosuchproperty, undefined, 'nosuchproperty');
