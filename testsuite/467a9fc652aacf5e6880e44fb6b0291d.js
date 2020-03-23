load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.1.3.6
description: >
  Returns undefined when key is not on the map.
info: >
  Map.prototype.get ( key )

  4. Let entries be the List that is the value of M’s [[MapData]] internal slot.
  5. Repeat for each Record {[[key]], [[value]]} p that is an element of
  entries,
    a. If p.[[key]] is not empty and SameValueZero(p.[[key]], key) is true,
    return p.[[value]].
  6. Return undefined.
  ...
---*/

var map = new Map();

assert.sameValue(
  map.get('item'), undefined,
 'returns undefined if key is not on the map'
);

map.set('item', 1);
map.set('another_item', 2);
map.delete('item');

assert.sameValue(
  map.get('item'), undefined,
  'returns undefined if key was deleted'
);

map.set('item', 1);
map.clear();

assert.sameValue(
  map.get('item'), undefined,
  'returns undefined after map is cleared'
);
