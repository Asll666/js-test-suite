load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          10.1.8-3
   ECMA Section:       Arguments Object
   Description:

   The [[Prototype]] of the arguments object is to the original Object
   prototype object, the one that is the initial value of Object.prototype
   (section 15.2.3.1).

   ...

   Test that "typeof arguments" is thus "object".

*/

var SECTION = "10.1.8-2";
var VERSION = "ECMA_1";
startTest();
var TITLE   = "Arguments Object";
writeHeaderToLog( SECTION + " "+ TITLE);

var expected = "object";
var actual = (function () { return typeof arguments; })();
reportCompare(expected, actual, "typeof arguments == object");

