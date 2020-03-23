load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          7.5-8-n.js
   ECMA Section:       7.5 Identifiers
   Description:        Identifiers are of unlimited length
   - can contain letters, a decimal digit, _, or $
   - the first character cannot be a decimal digit
   - identifiers are case sensitive

   Author:             christine@netscape.com
   Date:               11 september 1997
*/
var SECTION = "7.5-8-n";
var VERSION = "ECMA_1";
startTest();
var TITLE   = "Identifiers";

writeHeaderToLog( SECTION + " "+ TITLE);

DESCRIPTION = "var @0abc = 5; @0abc";
EXPECTED = "error";

new TestCase( SECTION,    "var @0abc = 5; @0abc",   "error",    eval("var @0abc = 5; @0abc") );

test();
