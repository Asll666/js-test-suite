load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

function f(a, b, c, d, e) {
  if (a && (b, c ? d() : e())) return 0;
}

f();
f();
%OptimizeFunctionOnNextCall(f);
f();
