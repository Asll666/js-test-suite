load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function f(x) {
 var v;
 if (x) v = 0;
 return v <= 1;
}
assertFalse(f(false));
