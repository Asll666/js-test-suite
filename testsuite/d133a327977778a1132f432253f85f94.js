load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("e7298b87458610fb43224d2d0185d930.js");
// |reftest| skip -- obsolete test
/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 349012;
var summary = 'closing a generator fails to report error if yield during close is ignored';
var actual = '';
var expect = '';


//-----------------------------------------------------------------------------
test();
//-----------------------------------------------------------------------------

if (typeof quit != 'undefined')
{
  quit(0);
}

function test()
{
  enterFunc ('test');
  printBugNumber(BUGNUMBER);
  printStatus (summary);

  expect = "Inner finally,Outer finally";

  function gen()
  {
    try {
      try {
        yield 1;
      } finally {
        actual += "Inner finally";
        yield 2;
      }
    } finally {
      actual += ",Outer finally";
    }
  }

  var iter = gen();
  iter.next();
  iter = null;
  gc();

  reportCompare(expect, actual, summary);
  exitFunc ('test');
}