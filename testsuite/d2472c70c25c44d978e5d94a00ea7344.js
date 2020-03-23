load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

//-----------------------------------------------------------------------------

var BUGNUMBER = 885798;
var summary = "ES6 (draft April 2014) 20.1.2.6 Number.MAX_SAFE_INTEGER";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

// Test value
assertEq(Number.MAX_SAFE_INTEGER, Math.pow(2, 53) - 1);

//Test property attributes
var descriptor = Object.getOwnPropertyDescriptor(Number, 'MAX_SAFE_INTEGER');

assertEq(descriptor.writable, false);
assertEq(descriptor.configurable, false);
assertEq(descriptor.enumerable, false);

if (typeof reportCompare === "function")
  reportCompare(true, true);
