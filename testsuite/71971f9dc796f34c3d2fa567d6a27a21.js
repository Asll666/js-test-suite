load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("190833e9c3b25d1ce1ce1635efac4ea0.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
     Only passes when the provided date is exactly the specified number of
     milliseconds from the Unix epoch
includes: [assertRelativeDateMs.js]
---*/

var thrown;

assertRelativeDateMs(new Date(1970, 0), 0);
assertRelativeDateMs(new Date(1970, 0, 1, 0, 0, 0, 0), 0);
assertRelativeDateMs(new Date(1970, 0, 1, 0, 0, 0, 1), 1);
assertRelativeDateMs(new Date(1970, 0, 1, 0, 0, 0, -1), -1);
assertRelativeDateMs(new Date(1970, 0, 1, 0, 0, 1, 0), 1000);
assertRelativeDateMs(new Date(1970, 0, 1, 0, 0, -1, 0), -1000);
assertRelativeDateMs(new Date(1970, 0, 1, 0, 2, 0, 0), 120000);
assertRelativeDateMs(new Date(1970, 0, 1, 0, -2, 0, 0), -120000);
assertRelativeDateMs(new Date(2016, 3, 12, 13, 21, 23, 24), 1460467283024);

thrown = null;
try {
  assertRelativeDateMs(new Date(1), 0);
} catch (err) {
  thrown = err;
}
if (!thrown) {
  $ERROR('Expected error, but no error was thrown.');
} else if (thrown.constructor !== Test262Error) {
  $ERROR('Expected error of type Test262Error.');
}

thrown = null;
try {
  assertRelativeDateMs(new Date(-1), 0);
} catch (err) {
  thrown = err;
}
if (!thrown) {
  $ERROR('Expected error, but no error was thrown.');
} else if (thrown.constructor !== Test262Error) {
  $ERROR('Expected error of type Test262Error.');
}

thrown = null;
try {
  assertRelativeDateMs(new Date(1970, 0), 1);
} catch (err) {
  thrown = err;
}
if (!thrown) {
  $ERROR('Expected error, but no error was thrown.');
} else if (thrown.constructor !== Test262Error) {
  $ERROR('Expected error of type Test262Error.');
}

thrown = null;
try {
  assertRelativeDateMs(new Date(1970, 0), -1);
} catch (err) {
  thrown = err;
}
if (!thrown) {
  $ERROR('Expected error, but no error was thrown.');
} else if (thrown.constructor !== Test262Error) {
  $ERROR('Expected error of type Test262Error.');
}

thrown = null;
try {
  assertRelativeDateMs(new Date('invalid'), NaN);
} catch (err) {
  thrown = err;
}
if (!thrown) {
  $ERROR('Expected error, but no error was thrown.');
} else if (thrown.constructor !== Test262Error) {
  $ERROR('Expected error of type Test262Error.');
}