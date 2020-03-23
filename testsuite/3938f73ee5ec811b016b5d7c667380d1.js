load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2016 Microsoft, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  Await can await any thenable.
flags: [async]
---*/

var error = {};
var thenable = {
  then: function (resolve, reject) {
    throw error;
  }
}
async function foo() {
  var caught = false;
  try {
    await thenable;
  } catch(e) {
    caught = true;
    assert.sameValue(e, error);
  }

  assert(caught);
}

foo().then($DONE, $DONE);

