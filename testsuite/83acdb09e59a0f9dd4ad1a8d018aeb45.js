load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax --crankshaft --no-always-opt

var s = "12345";

(function() {
  function foo() { return s[5]; }

  foo();
  foo();
  %OptimizeFunctionOnNextCall(foo);
  foo();
  %OptimizeFunctionOnNextCall(foo);
  foo();
  assertOptimized(foo);
})();

(function() {
  function foo(i) { return s[i]; }

  foo(0);
  foo(1);
  %OptimizeFunctionOnNextCall(foo);
  foo(5);
  %OptimizeFunctionOnNextCall(foo);
  foo(5);
  assertOptimized(foo);
})();
