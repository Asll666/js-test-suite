load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

var test = function() {
  var a = {"1": false, "2": false, "3": false, "4": false};
  assertEquals(false, a[1]);
  a[1] = true;
};
test();
test();
test();
%OptimizeFunctionOnNextCall(test);
test();
test();
test();