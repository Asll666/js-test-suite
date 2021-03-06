load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
load("65e8e26820ba9a26bd71129e09aa83c5.js");
/* -*- tab-width: 2; indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          15.9.5.5.js
   ECMA Section:       15.9.5.5
   Description:        Date.prototype.getYear

   This function is specified here for backwards compatibility only. The
   function getFullYear is much to be preferred for nearly all purposes,
   because it avoids the "year 2000 problem."

   1.  Let t be this time value.
   2.  If t is NaN, return NaN.
   3.  Return YearFromTime(LocalTime(t)) 1900.

   Author:             christine@netscape.com
   Date:               12 november 1997
*/

var SECTION = "15.9.5.5";
var VERSION = "ECMA_1";
startTest();
var TITLE   = "Date.prototype.getYear()";

writeHeaderToLog( SECTION + " "+ TITLE);

addTestCase( TIME_NOW );
addTestCase( TIME_0000 );
addTestCase( TIME_1970 );
addTestCase( TIME_1900 );
addTestCase( TIME_2000 );
addTestCase( UTC_FEB_29_2000 );

new TestCase( SECTION,
	      "(new Date(NaN)).getYear()",
	      NaN,
	      (new Date(NaN)).getYear() );

new TestCase( SECTION,
	      "Date.prototype.getYear.length",
	      0,
	      Date.prototype.getYear.length );

test();

function addTestCase( t ) {
  new TestCase( SECTION,
		"(new Date("+t+")).getYear()",
		GetYear(YearFromTime(LocalTime(t))),
		(new Date(t)).getYear() );

  new TestCase( SECTION,
		"(new Date("+(t+1)+")).getYear()",
		GetYear(YearFromTime(LocalTime(t+1))),
		(new Date(t+1)).getYear() );

  new TestCase( SECTION,
		"(new Date("+(t-1)+")).getYear()",
		GetYear(YearFromTime(LocalTime(t-1))),
		(new Date(t-1)).getYear() );

  new TestCase( SECTION,
		"(new Date("+(t-TZ_ADJUST)+")).getYear()",
		GetYear(YearFromTime(LocalTime(t-TZ_ADJUST))),
		(new Date(t-TZ_ADJUST)).getYear() );

  new TestCase( SECTION,
		"(new Date("+(t+TZ_ADJUST)+")).getYear()",
		GetYear(YearFromTime(LocalTime(t+TZ_ADJUST))),
		(new Date(t+TZ_ADJUST)).getYear() );
}
function GetYear( year ) {
  return year - 1900;
}
