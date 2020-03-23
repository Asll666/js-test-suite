load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          7.2.js
   ECMA Section:       7.2 Line Terminators
   Description:        - readability
   - separate tokens
   - may occur between any two tokens
   - cannot occur within any token, not even a string
   - affect the process of automatic semicolon insertion.

   white space characters are:
   unicode     name            formal name     string representation
   \u000A      line feed       <LF>            \n
   \u000D      carriage return <CR>            \r

   this test uses onerror to capture line numbers.  because
   we use on error, we can only have one test case per file.

   Author:             christine@netscape.com
   Date:               11 september 1997
*/
var SECTION = "7.2-2";
var VERSION = "ECMA_1";
startTest();
var TITLE   = "Line Terminators";

writeHeaderToLog( SECTION + " "+ TITLE);

DESCRIPTION = "\r\r\r\nb";
EXPECTED = "error"

  new TestCase( SECTION,   DESCRIPTION,     "error",     eval("\r\r\r\nb"));

test();

