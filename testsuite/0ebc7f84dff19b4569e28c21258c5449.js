load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax --ignition-staging --turbo

class Base {}
class Subclass extends Base {
  constructor() {
    %DeoptimizeNow();
    super();
  }
}
new Subclass();
new Subclass();
%OptimizeFunctionOnNextCall(Subclass);
new Subclass();
