load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("d3f509a059ad5596f8ab0d79602c5955.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/*
 *
 * Date:    09 September 2002
 * SUMMARY: Test for TypeError on invalid default string value of object
 * See ECMA reference at http://bugzilla.mozilla.org/show_bug.cgi?id=167325
 *
 */
//-----------------------------------------------------------------------------
var UBound = 0;
var BUGNUMBER = 167325;
var summary = "Test for TypeError on invalid default string value of object";
var TEST_PASSED = 'TypeError';
var TEST_FAILED = 'Generated an error, but NOT a TypeError!';
var TEST_FAILED_BADLY = 'Did not generate ANY error!!!';
var status = '';
var statusitems = [];
var actual = '';
var actualvalues = [];
var expect= '';
var expectedvalues = [];


status = inSection(1);
expect = TEST_PASSED;
actual = TEST_FAILED_BADLY;
/*
 * This should generate a TypeError. See ECMA reference
 * at http://bugzilla.mozilla.org/show_bug.cgi?id=167325
 */
try
{
  var obj = {toString: function() {return new Object();}}
  obj == 'abc';
}
catch(e)
{
  if (e instanceof TypeError)
    actual = TEST_PASSED;
  else
    actual = TEST_FAILED;
}
addThis();




//-----------------------------------------------------------------------------
test();
//-----------------------------------------------------------------------------



function addThis()
{
  statusitems[UBound] = status;
  actualvalues[UBound] = actual;
  expectedvalues[UBound] = expect;
  UBound++;
}


function test()
{
  enterFunc('test');
  printBugNumber(BUGNUMBER);
  printStatus(summary);

  for (var i=0; i<UBound; i++)
  {
    reportCompare(expectedvalues[i], actualvalues[i], statusitems[i]);
  }

  exitFunc ('test');
}
