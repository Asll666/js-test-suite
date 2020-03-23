load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax --function-context-specialization
// Flags: --turbo-filter=f --turbo-inlining

var f = (function() {
  var max = Math.max;
  return function f() { return max(0, -1); };
})();

assertEquals(0, f());
%OptimizeFunctionOnNextCall(f);
assertEquals(0, f());
