load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
/* -*- tab-width: 2; indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          15.7.3.3-4.js
   ECMA Section:       15.7.3.3 Number.MIN_VALUE
   Description:        All value properties of the Number object should have
   the attributes [DontEnum, DontDelete, ReadOnly]

   this test checks the DontEnum attribute of Number.MIN_VALUE

   Author:             christine@netscape.com
   Date:               16 september 1997
*/


var SECTION = "15.7.3.3-4";
var VERSION = "ECMA_1";
startTest();

writeHeaderToLog( SECTION + " Number.MIN_VALUE:  DontEnum Attribute");

new TestCase( SECTION,
	      "var string = ''; for ( prop in Number ) { string += ( prop == 'MIN_VALUE' ) ? prop : '' } string;",
	      "",
	      eval("var string = ''; for ( prop in Number ) { string += ( prop == 'MIN_VALUE' ) ? prop : '' } string;")
  );

test();
