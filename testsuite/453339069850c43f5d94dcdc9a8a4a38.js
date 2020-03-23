load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("e7298b87458610fb43224d2d0185d930.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 470223;
var summary = 'TM: Do not crash @ js_NewObjectWithGivenProto';
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


  function F(A) {
    for (R = [], s = 0; (m = A.indexOf("m", s++)) >= 0; )
      R.push([m]);
    for (i = R.length; i--; ) {
      let r = R[i];
      if (r[0]);
    }
  }
  F("m"); F("mm");


  reportCompare(expect, actual, summary);

  exitFunc ('test');
}
