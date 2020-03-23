load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor: Jason Orendorff
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 480579;
var summary = 'Do not assert: pobj_ == obj2';
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

  expect = '12';

  a = {x: 1};
  b = {__proto__: a};
  c = {__proto__: b};
  for (i = 0; i < 2; i++) {
    print(actual += c.x);
    b.x = 2;
  }

  reportCompare(expect, actual, summary);

  exitFunc ('test');
}