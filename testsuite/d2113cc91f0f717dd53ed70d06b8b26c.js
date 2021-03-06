load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("d7d7da2fe1bb153952fa646a08ffb7af.js");
// Copyright 2016 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: sec-properties-of-intl-pluralrules-prototype-object
description: >
    Tests that Intl.PluralRules.prototype meets the requirements for
    built-in objects defined by the introduction of chapter 17 of the
    ECMAScript Language Specification.
author: Zibi Braniecki
includes: [testBuiltInObject.js]
---*/

testBuiltInObject(Intl.PluralRules.prototype, false, false, ["constructor", "select", "resolvedOptions"]);
