load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

// Shu's test
function test(makeNonArray) {
    function C() {}
    C.prototype = []
    if (makeNonArray)
        C.prototype.constructor = C
    c = new C();
    c.push("foo");
    return c.length
}
assertEq(test(true), 1);
assertEq(test(false), 1);

// jorendorff's longer test
var a = [];
a.slowify = 1;
var b = Object.create(a);
b.length = 12;
assertEq(b.length, 12);

// jorendorff's shorter test
var b = Object.create(Array.prototype);
b.length = 12;
assertEq(b.length, 12);

reportCompare(true, true);
