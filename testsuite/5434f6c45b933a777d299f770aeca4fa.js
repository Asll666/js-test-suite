load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("a78642394624b473718326d9a37d69a7.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.1.1_1
description: Tests that the this-value is ignored in NumberFormat.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

testWithIntlConstructors(function (Constructor) {
    var obj, newObj;

    // variant 1: use constructor in a "new" expression
    obj = new Constructor();
    newObj = Intl.NumberFormat.call(obj);
    if (obj === newObj) {
      $ERROR("NumberFormat object created with \"new\" was not ignored as this-value.");
    }

    // variant 2: use constructor as a function
    obj = Constructor();
    newObj = Intl.NumberFormat.call(obj);
    if (obj === newObj) {
      $ERROR("NumberFormat object created with constructor as function was not ignored as this-value.");
    }

    return true;
});
