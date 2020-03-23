load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 476447;
var summary = 'Array getter/setter';
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
 
  Array.prototype.__defineGetter__('lastElement',(function() { return this[this.length-1]}));
  Array.prototype.__defineSetter__('lastElement',(function(num){this[this.length-1]=num}));
  var testArr=[1,2,3,4];

  expect = 4;
  actual = testArr.lastElement;

  reportCompare(expect, actual, summary);

  exitFunc ('test');
}
