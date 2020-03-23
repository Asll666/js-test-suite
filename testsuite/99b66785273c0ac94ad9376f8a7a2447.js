load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
/* -*- tab-width: 2; indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          15.7.3.5-3.js
   ECMA Section:       15.7.3.5 Number.NEGATIVE_INFINITY
   Description:        All value properties of the Number object should have
   the attributes [DontEnum, DontDelete, ReadOnly]

   this test checks the ReadOnly attribute of Number.NEGATIVE_INFINITY

   Author:             christine@netscape.com
   Date:               16 september 1997
*/

var SECTION = "15.7.3.5-3";
var VERSION = "ECMA_1";
startTest();
var TITLE   = "Number.NEGATIVE_INFINITY";

writeHeaderToLog( SECTION + " "+TITLE);

new TestCase( SECTION,
	      "Number.NEGATIVE_INFINITY=0; Number.NEGATIVE_INFINITY",
	      -Infinity,
	      eval("Number.NEGATIVE_INFINITY=0; Number.NEGATIVE_INFINITY") );

test();
