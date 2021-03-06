load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("a78642394624b473718326d9a37d69a7.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.3.2_1_c
description: Tests that compare function is bound to its Intl.Collator.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

var strings = ["d", "O", "od", "oe", "of", "ö", "o\u0308", "X", "y", "Z", "Z.", "𠮷野家", "吉野家", "!A", "A", "b", "C"];
var locales = [undefined, ["de"], ["de-u-co-phonebk"], ["en"], ["ja"], ["sv"]];
var options = [
    undefined,
    {usage: "search"},
    {sensitivity: "base", ignorePunctuation: true}
];

locales.forEach(function (locales) {
    options.forEach(function (options) {
        var collatorObj = new Intl.Collator(locales, options);
        var compareFunc = collatorObj.compare;
        var referenceSorted = strings.slice();
        referenceSorted.sort(function (a, b) { return collatorObj.compare(a, b); });
        var sorted = strings;
        sorted.sort(compareFunc);
        try {
            testArraysAreSame(referenceSorted, sorted);
        } catch (e) {
            e.message += " (Testing with locales " + locales + "; options " +
                (options ? JSON.stringify(options) : options) + ".)";
            throw e;
        }
    });
});
