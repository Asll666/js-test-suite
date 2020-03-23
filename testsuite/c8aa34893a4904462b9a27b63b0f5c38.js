load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

function foo(x) {
  var a = new Array(1);
  a[0] = x;
  return a;
}

assertEquals([1], foo(1));
assertEquals([1], foo(1));
%OptimizeFunctionOnNextCall(foo);
assertEquals([1], foo(1));
Object.prototype.__defineSetter__("0", function() {});
assertEquals([undefined], foo(1));
