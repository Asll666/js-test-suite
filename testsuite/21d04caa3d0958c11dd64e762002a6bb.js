load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

function test(f) {
  assertTrue(f(0));
  assertTrue(f(Number.MIN_VALUE));
  assertTrue(f(Number.MAX_VALUE));
  assertTrue(f(Number.MIN_SAFE_INTEGER));
  assertTrue(f(Number.MIN_SAFE_INTEGER - 13));
  assertTrue(f(Number.MAX_SAFE_INTEGER));
  assertTrue(f(Number.MAX_SAFE_INTEGER + 23));
  assertFalse(f(Number.NaN));
  assertFalse(f(Number.POSITIVE_INFINITY));
  assertFalse(f(Number.NEGATIVE_INFINITY));
  assertFalse(f(1 / 0));
  assertFalse(f(-1 / 0));
}

function f(x) {
  return Number.isFinite(+x);
}

test(f);
test(f);
%OptimizeFunctionOnNextCall(f);
test(f);
