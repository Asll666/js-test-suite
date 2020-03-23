load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("e7298b87458610fb43224d2d0185d930.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 363040;
var summary = 'Array.prototype.reduce application in array flattening';
var actual = '';
var expect = '';


//-----------------------------------------------------------------------------
test();
//-----------------------------------------------------------------------------

function test()
{
  enterFunc ('test');
  printBugNumber(BUGNUMBER);
  printStatus (summary);
 
  function flatten(arr)
  {
    function op(partial, item)
    {
      if (item instanceof Array)
        Array.prototype.push.apply(partial, flatten(item));
      else
        partial.push(item);

      return partial;
    }

    return arr.reduce(op, []);
  }

  expect = [1, 2, 3];
  actual = flatten([1, 2, 3]);      // [1, 2, 3]
  reportCompare(expect + '', actual + '', summary + ': ' + expect);

  expect = [1, 2, 3];
  actual = flatten([1, [2], 3]);    // [1, 2, 3]
  reportCompare(expect + '', actual + '', summary + ': ' + expect);

  expect = [2, 3];
  actual = flatten([[], 2, 3]);     // [2, 3]
  reportCompare(expect + '', actual + '', summary + ': ' + expect);

  expect = [1, 2, 3];
  actual = flatten([[1], 2, 3]);    // [1, 2, 3]
  reportCompare(expect + '', actual + '', summary + ': ' + expect);

  expect = [4];
  actual = flatten([[[[4]]]]);      // [4]
  reportCompare(expect + '', actual + '', summary + ': ' + expect);

  expect = [1, 2, 3];
  actual = flatten([1, [2, [3]]]);  // [1, 2, 3]
  reportCompare(expect + '', actual + '', summary + ': ' + expect);

  expect = [];
  actual = flatten([[[[[]]]]]);     // []
  reportCompare(expect + '', actual + '', summary + ': ' + expect);

  exitFunc ('test');
}