load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor:
 *   Jeff Walden <jwalden+code@mit.edu>
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 518663;
var summary =
  'Object.getOwnPropertyNames should play nicely with enumerator caching';

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

for (var p in JSON);
var names = Object.getOwnPropertyNames(JSON);
assertEq(names.length >= 2, true,
         "wrong number of property names?  [" + names + "]");
assertEq(names.indexOf("parse") >= 0, true);
assertEq(names.indexOf("stringify") >= 0, true);

/******************************************************************************/

reportCompare(true, true);

print("All tests passed!");
