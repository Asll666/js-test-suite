load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2016 Microsoft, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  Super calls work in body of async methods
flags: [async]
---*/

var sup = {
  method() {
    return 'sup';
  }
}

var child = {
  __proto__: sup,
  async method() {
    var x = await super.method();
    assert.sameValue(x, 'sup');
  }
}

child.method().then($DONE, $DONE);
