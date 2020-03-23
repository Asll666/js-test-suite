load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Validating dynamic-attach on function which declares arguments as a params (204064)

function test() {
    function foo(arguments) {
        eval('arguments');                 /**bp:locals()**/
    }
    foo("11");                     
    WScript.Echo("Pass");
}
WScript.Attach(test);
