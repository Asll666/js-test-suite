load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-3-s
description: this is not coerced to an object in strict mode (undefined)
flags: [noStrict]
---*/

  function foo()
  {
    'use strict';
    return typeof(this);
  }

  function bar()
  {
    return typeof(this);
  }

assert.sameValue(foo.call(undefined), 'undefined', 'foo.call(undefined)');
assert.sameValue(bar.call(), 'object', 'bar.call()');
