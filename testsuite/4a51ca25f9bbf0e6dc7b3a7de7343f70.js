load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --expose-wasm

load("0e11f61b08293f1182a506d61faebbd0.js");
load("04f5c575f8cd734a07b2beedb1765d6e.js");

(function() {
  var builder = new WasmModuleBuilder();
  builder.addFunction("foo", kSig_i_ii)
    .addBody([
        kExprLoop, 00,
        kExprBrTable, 0xfb, 0xff, 0xff, 0xff,
              ])
              .exportFunc();
  assertThrows(function() { builder.instantiate(); });
})();
