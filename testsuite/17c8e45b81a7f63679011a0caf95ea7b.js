load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 367561;
var summary = 'JSOP_(GET|SET)METHOD and JSOP_SETCONST with > 64K atoms';
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
 
  var N = 1 << 16;
  var src = 'var x = /';
  var array = Array();
  for (var i = 0; i != N/2; ++i)
    array[i] = i;
  src += array.join('/;x=/')+'/; x="';
  src += array.join('";x="')+'";';
  src += 'const some_const = 10';
  eval(src);

  reportCompare(expect, actual, summary);

  exitFunc ('test');
}
