load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var expect = 'pass';
var actual = expect;
function f({"\xF51F": x}) {}
try {
    eval(uneval(f));
} catch (e) {
    actual = '' + e;
}
reportCompare(expect, actual, "");
