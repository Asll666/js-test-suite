load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
/* -*- tab-width: 2; indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          11.2.2-9-n.js
   ECMA Section:       11.2.2. The new operator
   Description:

   MemberExpression:
   PrimaryExpression
   MemberExpression[Expression]
   MemberExpression.Identifier
   new MemberExpression Arguments

   new NewExpression

   The production NewExpression : new NewExpression is evaluated as follows:

   1.   Evaluate NewExpression.
   2.   Call GetValue(Result(1)).
   3.   If Type(Result(2)) is not Object, generate a runtime error.
   4.   If Result(2) does not implement the internal [[Construct]] method,
   generate a runtime error.
   5.   Call the [[Construct]] method on Result(2), providing no arguments
   (that is, an empty list of arguments).
   6.   If Type(Result(5)) is not Object, generate a runtime error.
   7.   Return Result(5).

   The production MemberExpression : new MemberExpression Arguments is evaluated as follows:

   1.   Evaluate MemberExpression.
   2.   Call GetValue(Result(1)).
   3.   Evaluate Arguments, producing an internal list of argument values
   (section 0).
   4.   If Type(Result(2)) is not Object, generate a runtime error.
   5.   If Result(2) does not implement the internal [[Construct]] method,
   generate a runtime error.
   6.   Call the [[Construct]] method on Result(2), providing the list
   Result(3) as the argument values.
   7.   If Type(Result(6)) is not Object, generate a runtime error.
   8    .Return Result(6).

   Author:             christine@netscape.com
   Date:               12 november 1997
*/

var SECTION = "11.2.2-9-n.js";
var VERSION = "ECMA_1";
startTest();
var TITLE   = "The new operator";

writeHeaderToLog( SECTION + " "+ TITLE);

var BOOLEAN = new Boolean();

DESCRIPTION = "var BOOLEAN = new Boolean(); var b = new BOOLEAN()";
EXPECTED = "error";

new TestCase( SECTION,
	      "var BOOLEAN = new Boolean(); var b = new BOOLEAN()",
	      "error",
	      eval("b = new BOOLEAN()") );
test();

function TestFunction() {
  return arguments;
}
