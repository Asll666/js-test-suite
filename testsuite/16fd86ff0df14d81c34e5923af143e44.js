load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 21.1.2.4
description: >
  Returns empty string if template.raw.length is <= 0
info: >
  21.1.2.4 String.raw ( template , ...substitutions )

  ...
  7. Let literalSegments be ToLength(Get(raw, "length")).
  8. ReturnIfAbrupt(literalSegments).
  9. If literalSegments ≤ 0, return the empty string.
  ...
---*/

var result = String.raw({
  raw: {
    length: 0
  }
});
assert.sameValue(result, '', 'result is an empty string when length == 0');

result = String.raw({
  raw: {
    length: -1
  }
});
assert.sameValue(result, '', 'result is an empty string when length == -1');

result = String.raw({
  raw: {
    length: -0
  }
});
assert.sameValue(result, '', 'result is an empty string when length == -0');

result = String.raw({
  raw: {
    length: 0.32
  }
});
assert.sameValue(result, '', 'result is an empty string when length == 0.32');
