load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          7.4.1-3-n.js
   ECMA Section:       7.4.1

   Description:

   Reserved words cannot be used as identifiers.

   ReservedWord ::
   Keyword
   FutureReservedWord
   NullLiteral
   BooleanLiteral

   Author:             christine@netscape.com
   Date:               12 november 1997

*/
var SECTION = "7.4.1-3-n";
var VERSION = "ECMA_1";
startTest();
var TITLE   = "Keywords";

DESCRIPTION = "var false = true";
EXPECTED = "error";

new TestCase( SECTION,  "var false = true",     "error",    eval("var false = true") );

test();
