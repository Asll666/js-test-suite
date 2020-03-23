load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("b838f1585aea1338f85dfef2026aaa95.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          lexical-050.js
   Corresponds to:     7.8.2-1-n.js
   ECMA Section:       7.8.2 Examples of Automatic Semicolon Insertion
   Description:        compare some specific examples of the automatic
   insertion rules in the EMCA specification.
   Author:             christine@netscape.com
   Date:               15 september 1997
*/

var SECTION = "lexical-050";
var VERSION = "JS1_4";
var TITLE   = "Examples of Automatic Semicolon Insertion";

startTest();
writeHeaderToLog( SECTION + " "+ TITLE);

var result = "Failed";
var exception = "No exception thrown";
var expect = "Passed";

try {
  eval("{ 1 2 } 3");
} catch ( e ) {
  result = expect;
  exception = e.toString();
}

new TestCase(
  SECTION,
  "{ 1 2 } 3" +
  " (threw " + exception +")",
  expect,
  result );

test();



