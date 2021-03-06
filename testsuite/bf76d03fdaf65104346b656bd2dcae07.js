load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("e7298b87458610fb43224d2d0185d930.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 369666;
var summary = 'inner function declaration in let-induced outer ' +
  'function body gets wrong scope.';
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

  function foo() {
    let x = 42

      function bar() {
      return x;
    }

    return bar;
  }

  print(foo()());

  baz = false;

  function foo2() {
    let x = 42

      function bar() {
      return x;
    }

    function bletch() {
      return x * x;
    }

    try {
      if (baz)
        return bar;
    } finally {
      print('finally', x);
    }
    return bletch;
  }

  print(foo2()());

  reportCompare(expect, actual, summary);

  exitFunc ('test');
}
