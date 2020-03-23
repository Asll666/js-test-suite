load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
load("65e8e26820ba9a26bd71129e09aa83c5.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          15.9.2.2.js
   ECMA Section:       15.9.2.2 Date constructor used as a function
   Date( year, month, date, hours, minutes, seconds )
   Description:        The arguments are accepted, but are completely ignored.
   A string is created and returned as if by the
   expression (new Date()).toString().

   Author:             christine@netscape.com
   Date:               28 october 1997
   Version:            9706

*/
var VERSION = 9706;
startTest();
var SECTION = "15.9.2.2";
var TOLERANCE = 100;
var TITLE = "The Date Constructor Called as a Function";

writeHeaderToLog(SECTION+" "+TITLE );

// allow up to 1 second difference due to possibility
// the date may change by 1 second in between calls to Date

var d1;
var d2;

// Dates around feb 29, 2000

d1 = new Date();
d2 = Date.parse(Date(2000,1,29,0,0,0));
new TestCase(SECTION, "Date(2000,1,29,0,0,0)", true, d2 - d1 <= 1000);

d1 = new Date();
d2 = Date.parse(Date(2000,1,28,23,59,59));
new TestCase(SECTION, "Date(2000,1,28,23,59,59)", true, d2 - d1 <= 1000);

d1 = new Date();
d2 = Date.parse(Date(2000,1,27,16,0,0));
new TestCase(SECTION, "Date(2000,1,27,16,0,0)", true, d2 - d1 <= 1000);

test();
