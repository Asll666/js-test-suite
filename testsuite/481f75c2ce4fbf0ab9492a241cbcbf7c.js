load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Source is an object with length property and one item is deleted
    from the source
es6id: 22.1.2.1
---*/

var array = [2, 4, 0, 16];
var expectedArray = [2, 4, , 16];
var obj = {
    length : 4,
    0 : 2,
    1 : 4,
    2 : 0,
    3 : 16
};
delete obj[2];
var a = Array.from(obj);
for (var j = 0; j < expectedArray.length; j++) {
    assert.sameValue(a[j], expectedArray[j], "Elements mismatch at " + j + ".");
}
