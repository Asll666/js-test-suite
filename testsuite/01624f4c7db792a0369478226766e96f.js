load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("6541b3270fb9a4b0727a6347f747112c.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 452498;
var summary = 'TM: upvar2 regression tests';
var actual = '';
var expect = '';

//-------  Comment #160  From  Gary Kwong

//-----------------------------------------------------------------------------
test();
//-----------------------------------------------------------------------------

function test()
{
  enterFunc ('test');
  printBugNumber(BUGNUMBER);
  printStatus (summary);

// crash [@ js_Interpret]
  (eval("(function(){ this.watch(\"x\", function () { new function () { return y; } } ); const y = undefined });"))();
  x = NaN;
  reportCompare(expect, actual, summary + ': 2');

// Assertion failure: JOF_OPTYPE(op) == JOF_ATOM, at ../jsemit.cpp:5916
  ({ set z(v){},  set y(v) { return --x; }, set w(v) { return --w; } });
  reportCompare(expect, actual, summary + ': 3');

  exitFunc ('test');
}
