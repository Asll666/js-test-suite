load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

var Foo = {
  [Symbol.hasInstance]: Function.prototype[Symbol.hasInstance]
};

// TurboFan will optimize this to false via constant-folding the
// OrdinaryHasInstance call inside Function.prototype[@@hasInstance].
function foo() { return 1 instanceof Foo; }

assertEquals(false, foo());
assertEquals(false, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(false, foo());
