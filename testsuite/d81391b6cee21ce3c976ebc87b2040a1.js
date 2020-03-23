load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 453747;
var summary = 'Do not assert with JIT: boxed.isUndefined() || boxed.isBoolean()';
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


  (function(){
    var a = [];
    var s = 10;
    for (var i = 0; i < s; ++i)
      a[i] = 1;
    a[4*s-1] = 2;
    for (var i = s+1; i < s+4; ++i)
      typeof a[i];
  })();


  reportCompare(expect, actual, summary);

  exitFunc ('test');
}
