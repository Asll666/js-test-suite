load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 417893;
var summary = 'Fast natives must use JS_THIS/JS_THIS_OBJECT';
var actual = 'No Crash';
var expect = 'No Crash';


//-----------------------------------------------------------------------------
test();
//-----------------------------------------------------------------------------

function test()
{
  enterFunc ('test');
  printBugNumber(BUGNUMBER);
  printStatus (summary);

  try
  {
    (function() { var s = function(){}.prototype.toSource; s(); })();
  }
  catch (e)
  {
    assertEq(e instanceof TypeError, true,
             "No TypeError for Object.prototype.toSource");
  }

  reportCompare(expect, actual, summary);

  exitFunc ('test');
}
