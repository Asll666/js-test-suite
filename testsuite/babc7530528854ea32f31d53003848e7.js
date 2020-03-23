load("0d8683db8b3792521a65ad1edba9cf82.js");
load("dada5190587903f93a3604016a6099ce.js");
load("e61db04c7f35aa37aeeb2dfa021f4d7c.js");
load("91a125352d673b4f8f562e7ba3391954.js");
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
 * The Original Code is Mozilla Communicator client code, released
 * March 31, 1998.
 *
 * The Initial Developer of the Original Code is
 * Netscape Communications Corporation.
 * Portions created by the Initial Developer are Copyright (C) 1998
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
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

gTestfile = '15.3.2.1-2.js';

/**
   File Name:          15.3.2.1.js
   ECMA Section:       15.3.2.1 The Function Constructor
   new Function(p1, p2, ..., pn, body )

   Description:
   Author:             christine@netscape.com
   Date:               28 october 1997

*/
var SECTION = "15.3.2.1-2";
var VERSION = "ECMA_1";
startTest();
var TITLE   = "The Function Constructor";

writeHeaderToLog( SECTION + " "+ TITLE);


var myfunc1 = new Function("a","b","c", "return a+b+c" );
var myfunc2 = new Function("a, b, c",   "return a+b+c" );
var myfunc3 = new Function("a,b", "c",  "return a+b+c" );

myfunc1.toString = Object.prototype.toString;
myfunc2.toString = Object.prototype.toString;
myfunc3.toString = Object.prototype.toString;

new TestCase( SECTION,  "myfunc1 = new Function('a','b','c'); myfunc.toString = Object.prototype.toString; myfunc.toString()",
	      "[object Function]",
	      myfunc1.toString() );

new TestCase( SECTION,  "myfunc1.length",                            3,                      myfunc1.length );
new TestCase( SECTION,  "myfunc1.prototype.toString()",              "[object Object]",      myfunc1.prototype.toString() );

new TestCase( SECTION,  "myfunc1.prototype.constructor",             myfunc1,                myfunc1.prototype.constructor );
new TestCase( SECTION,  "myfunc1.arguments",                         null,                   myfunc1.arguments );
new TestCase( SECTION,  "myfunc1(1,2,3)",                            6,                      myfunc1(1,2,3) );
new TestCase( SECTION,  "var MYPROPS = ''; for ( var p in myfunc1.prototype ) { MYPROPS += p; }; MYPROPS",
	      "",
	      eval("var MYPROPS = ''; for ( var p in myfunc1.prototype ) { MYPROPS += p; }; MYPROPS") );

new TestCase( SECTION,  "myfunc2 = new Function('a','b','c'); myfunc.toString = Object.prototype.toString; myfunc.toString()",
	      "[object Function]",
	      myfunc2.toString() );
new TestCase( SECTION,  "myfunc2.length",                            3,                      myfunc2.length );
new TestCase( SECTION,  "myfunc2.prototype.toString()",              "[object Object]",      myfunc2.prototype.toString() );

new TestCase( SECTION,  "myfunc2.prototype.constructor",             myfunc2,                 myfunc2.prototype.constructor );
new TestCase( SECTION,  "myfunc2.arguments",                         null,                   myfunc2.arguments );
new TestCase( SECTION,  "myfunc2( 1000, 200, 30 )",                 1230,                    myfunc2(1000,200,30) );
new TestCase( SECTION,  "var MYPROPS = ''; for ( var p in myfunc2.prototype ) { MYPROPS += p; }; MYPROPS",
	      "",
	      eval("var MYPROPS = ''; for ( var p in myfunc2.prototype ) { MYPROPS += p; }; MYPROPS") );

new TestCase( SECTION,  "myfunc3 = new Function('a','b','c'); myfunc.toString = Object.prototype.toString; myfunc.toString()",
	      "[object Function]",
	      myfunc3.toString() );
new TestCase( SECTION,  "myfunc3.length",                            3,                      myfunc3.length );
new TestCase( SECTION,  "myfunc3.prototype.toString()",              "[object Object]",      myfunc3.prototype.toString() );
new TestCase( SECTION,  "myfunc3.prototype.valueOf() +''",           "[object Object]",      myfunc3.prototype.valueOf() +'' );
new TestCase( SECTION,  "myfunc3.prototype.constructor",             myfunc3,                 myfunc3.prototype.constructor );
new TestCase( SECTION,  "myfunc3.arguments",                         null,                   myfunc3.arguments );
new TestCase( SECTION,  "myfunc3(-100,100,NaN)",                    Number.NaN,              myfunc3(-100,100,NaN) );

new TestCase( SECTION,  "var MYPROPS = ''; for ( var p in myfunc3.prototype ) { MYPROPS += p; }; MYPROPS",
	      "",
	      eval("var MYPROPS = ''; for ( var p in myfunc3.prototype ) { MYPROPS += p; }; MYPROPS") );
test();