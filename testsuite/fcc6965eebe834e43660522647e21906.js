load("0d8683db8b3792521a65ad1edba9cf82.js");
load("dada5190587903f93a3604016a6099ce.js");
load("01e0ec3a9a01836764c05319def52ae3.js");
load("762f4c20b6c2bf79dcf92be3017eef40.js");
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
 * The Original Code is JavaScript Engine testing utilities.
 *
 * The Initial Developer of the Original Code is
 * Netscape Communications Corp.
 * Portions created by the Initial Developer are Copyright (C) 2003
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *   igor@fastmail.fm, pschwartau@netscape.com
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
 *
 * Date:    29 Sep 2003
 * SUMMARY: Testing __parent__ and __proto__ of Script object
 *
 * See http://bugzilla.mozilla.org/show_bug.cgi?id=220584
 */
//-----------------------------------------------------------------------------
var gTestfile = 'regress-220584.js';
var UBound = 0;
var BUGNUMBER = 220584;
var summary = 'Testing __parent__ and __proto__ of Script object';
var status = '';
var statusitems = [];
var actual = '';
var actualvalues = [];
var expect= '';
var expectedvalues = [];
var s;


// invoke |Script| as a function
status = inSection(1);
if (typeof Script == 'undefined')
{
  reportCompare("Script not defined, Test skipped.",
                "Script not defined, Test skipped.",
                summary);
}
else
{
  s = Script('1;');
  actual = s instanceof Object;
  expect = true;
  addThis();

  status = inSection(2);
  actual = (s.__parent__ == undefined) || (s.__parent__ == null);
  expect = false;
  addThis();

  status = inSection(3);
  actual = (s.__proto__ == undefined) || (s.__proto__ == null);
  expect = false;
  addThis();

  status = inSection(4);
  actual = (s + '').length > 0;
  expect = true;
  addThis();

}

// invoke |Script| as a constructor
status = inSection(5);
if (typeof Script == 'undefined')
{
  print('Test skipped. Script not defined.');
}
else
{
  s = new Script('1;');

  actual = s instanceof Object;
  expect = true;
  addThis();

  status = inSection(6);
  actual = (s.__parent__ == undefined) || (s.__parent__ == null);
  expect = false;
  addThis();

  status = inSection(7);
  actual = (s.__proto__ == undefined) || (s.__proto__ == null);
  expect = false;
  addThis();

  status = inSection(8);
  actual = (s + '').length > 0;
  expect = true;
  addThis();
}

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
