load("201224b0d1c296b45befd2285e95dd42.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
load("de7a245d037cbe0336acdfcbd813dc8e.js");

var obj = {};

function strictAssign(a)
{
  "use strict";
  a = 17;
  return arguments;
}

var a1, a2, a3;
for (var i = 0; i < 5; i++)
{
  a1 = strictAssign();
  a2 = strictAssign(1);
  a3 = strictAssign(1, obj);
}

assertEq(arraysEqual(a1, []), true);
assertEq(arraysEqual(a2, [1]), true);
assertEq(arraysEqual(a3, [1, obj]), true);
