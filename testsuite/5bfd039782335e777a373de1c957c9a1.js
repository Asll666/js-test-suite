load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("5df59863d90268eb6e10a53e77fee656.js");
// |reftest| skip
/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 471197;
var summary = 'Do not crash when cx->thread is null';
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
 
  var results;


  function f() {
    for (var i = 0; i != 1000; ++i) {
    }
  }

  if (typeof scatter == 'function')
  {
    results = scatter([f, f]);
  }
  else
  {
    print('Test skipped due to lack of scatter threadsafe function');
  }


  reportCompare(expect, actual, summary);

  exitFunc ('test');
}
