load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    HTML-like comments are not available in module code
    (SingleLineHTMLOpenComment)
esid: sec-html-like-comments
es6id: B1.3
negative:
  phase: early
  type: SyntaxError
flags: [module]
---*/

<!--
