load("0d8683db8b3792521a65ad1edba9cf82.js");
load("dada5190587903f93a3604016a6099ce.js");
load("53234245c682115e8e9d606e8a018647.js");
load("0afa33476e37a2be7fe5999ed35d4073.js");
/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is mozilla.org code.
 *
 * The Initial Developer of the Original Code is
 * Netscape Communications Corporation.
 * Portions created by the Initial Developer are Copyright (C) 1998
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *   pschwartau@netscape.com
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

/*
 * Date: 13 August 2001
 *
 * SUMMARY: Invoking an undefined function should produce a ReferenceError
 * See http://bugzilla.mozilla.org/show_bug.cgi?id=95101
 */
//-----------------------------------------------------------------------------
var gTestfile = 'regress-95101.js';
var UBound = 0;
var BUGNUMBER = 95101;
var summary = 'Invoking an undefined function should produce a ReferenceError';
var msgERR_REF_YES = 'ReferenceError';
var msgERR_REF_NO = 'did NOT generate a ReferenceError';
var status = '';
var statusitems = [];
var actual = '';
var actualvalues = [];
var expect= '';
var expectedvalues = [];


try
{
  xxxyyyzzz();
}
catch (e)
{
  status = 'Section 1 of test';
  actual = e instanceof ReferenceError;
  expect = true;
  addThis();


  /*
   * This test is more literal, and may one day be invalid.
   * Searching for literal string "ReferenceError" in e.toString()
   */
  status = 'Section 2 of test';
  var match = e.toString().search(/ReferenceError/);
  actual = (match > -1);
  expect = true;
  addThis();
}



//-----------------------------------------------------------------------------
test();
//-----------------------------------------------------------------------------


function addThis()
{
  statusitems[UBound] = status;
  actualvalues[UBound] = isReferenceError(actual);
  expectedvalues[UBound] = isReferenceError(expect);
  UBound++;
}


function test()
{
  enterFunc ('test');
  printBugNumber(BUGNUMBER);
  printStatus (summary);

  for (var i = 0; i < UBound; i++)
  {
    reportCompare(expectedvalues[i], actualvalues[i], statusitems[i]);
  }

  exitFunc ('test');
}


// converts a Boolean result into a textual result -
function isReferenceError(bResult)
{
  return bResult? msgERR_REF_YES : msgERR_REF_NO;
}