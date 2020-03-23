load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

// Test that PC in optimized frame would correctly translate into
// unoptimized frame when collecting stack trace.

function f() {
  return new Error().stack;
}

function g(x) {
  return f();
}

g();
g();
%OptimizeFunctionOnNextCall(g);
print(g());
assertTrue(/g \(.*?\.js:15:10\)/.test(g()));
