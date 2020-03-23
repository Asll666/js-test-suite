load("201224b0d1c296b45befd2285e95dd42.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
load("de7a245d037cbe0336acdfcbd813dc8e.js");

function strictMaybeNestedEval(code, p)
{
  "use strict";
  function inner() { eval(code); }
  return arguments;
}

var a1, a2, a3, a4;
for (var i = 0; i < 5; i++)
{
  a1 = strictMaybeNestedEval("1", 2);
  a2 = strictMaybeNestedEval("arguments");
  a3 = strictMaybeNestedEval("p = 2");
  a4 = strictMaybeNestedEval("p = 2", 17);
}

assertEq(arraysEqual(a1, ["1", 2]), true);
assertEq(arraysEqual(a2, ["arguments"]), true);
assertEq(arraysEqual(a3, ["p = 2"]), true);
assertEq(arraysEqual(a4, ["p = 2", 17]), true);
