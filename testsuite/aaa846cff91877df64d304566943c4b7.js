load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

function f(x) {
  var a = [1, 2];
  a[x];
  return a[0 - x];
}

f(0);
f(0);
%OptimizeFunctionOnNextCall(f);
assertEquals(undefined, f(1));
