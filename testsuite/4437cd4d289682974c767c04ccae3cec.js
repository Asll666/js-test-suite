load("0d8683db8b3792521a65ad1edba9cf82.js");
load("dada5190587903f93a3604016a6099ce.js");
load("488f6f0ad9d5386b1197f53e0a162bb9.js");
load("91a125352d673b4f8f562e7ba3391954.js");
/* -*- Mode: C++; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 4 -*-
 *
 * ***** BEGIN LICENSE BLOCK *****
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
 *   Rob Ginda rginda@netscape.com
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

gTestfile = 'apply-001-n.js';

print("STATUS: f.apply crash test.");

print("BUGNUMBER: 21836");

function f ()
{
}

var SECTION = "apply-001-n";
var VERSION = "ECMA_1";
startTest();
var TITLE   = "f.apply(2,2) doesn't crash";

writeHeaderToLog( SECTION + " "+ TITLE);

DESCRIPTION = "f.apply(2,2) doesn't crash";
EXPECTED = "error";

new TestCase( SECTION,  "f.apply(2,2) doesn't crash",     "error",    eval("f.apply(2,2)") );

test();

