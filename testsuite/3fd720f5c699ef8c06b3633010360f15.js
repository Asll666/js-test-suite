load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("b838f1585aea1338f85dfef2026aaa95.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          lexical-047.js
   Corresponds To:     7.8.1-7-n.js
   ECMA Section:       7.8.1
   Description:
   Author:             christine@netscape.com
   Date:               15 september 1997
*/

var SECTION = "lexical-047";
var VERSION = "JS1_4";
var TITLE   = "for loops";

startTest();
writeHeaderToLog( SECTION + " "+ TITLE);

var result = "Failed";
var exception = "No exception thrown";
var expect = "Passed";

try {
  var counter = 0;
  eval("for ( counter = 0\n"
       + "counter <= 1\n"
       + "counter++ )\n"
       + "{\n"
       + "result += \":  got to inner loop\";\n"
       + "}\n");

} catch ( e ) {
  result = expect;
  exception = e.toString();
}

new TestCase(
  SECTION,
  "line breaks within a for expression" +
  " (threw " + exception +")",
  expect,
  result );

test();


