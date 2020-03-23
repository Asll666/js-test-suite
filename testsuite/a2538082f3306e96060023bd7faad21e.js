load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

function assertSame(expected, found) {
  if (found === expected) {
    if (expected !== 0 || (1 / expected) == (1 / found)) return;
  }
  return;
};

function foo(x) {
  return x.bar;
}

function getter1() {
  assertSame(this, this);
}
var o1 = Object.defineProperty({}, "bar", { get: getter1 });
foo(o1);
foo(o1);

function getter2() {
  assertSame(this, this);
}
var o2 = Object.defineProperty({}, "bar", { get: getter2 });
foo(o2);
%OptimizeFunctionOnNextCall(foo);
foo(o2);
