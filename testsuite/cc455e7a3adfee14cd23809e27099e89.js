load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Mapped arguments object with non-configurable property
description: >
    Mapping works when property is non-configurable, arguments property
    was not deleted. Arguments property is changed with
    [[Set]].
flags: [noStrict]
---*/

function argumentsAndDeleteSet(a) {
  Object.defineProperty(arguments, "0", {configurable: false});

  // Precondition: Delete is unsuccessful and doesn't affect mapping.
  assert.sameValue(delete arguments[0], false);
  assert.sameValue(a, 1);
  assert.sameValue(arguments[0], 1);

  arguments[0] = 2;
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 2);
}
argumentsAndDeleteSet(1);
