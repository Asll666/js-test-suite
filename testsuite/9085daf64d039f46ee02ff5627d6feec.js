load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("5df59863d90268eb6e10a53e77fee656.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor: Jason Orendorff
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 477581;
var summary = 'Do not assert: !regs.sp[-2].isPrimitive()';
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

 
  function g() { yield 2; }
  var iterables = [[1], [], [], [], g()];
  for (let i = 0; i < iterables.length; i++)
    for each (let j in iterables[i])
               ;


  reportCompare(expect, actual, summary);

  exitFunc ('test');
}
