load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --ignition-staging --stack-size=100

function Module(stdlib) {
  "use asm";

  var fround = stdlib.Math.fround;

  // f: double -> float
  function f(a) {
    a = +a;
    return fround(a);
  }

  return { f: f };
}

var f = Module({ Math: Math }).f;

function runNearStackLimit()  {
  function g() { try { g(); } catch(e) { f(); } };
  g();
}

(function () {
  function g() {}

  runNearStackLimit(g);
})();
