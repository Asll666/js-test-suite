load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var escape;
function test(param)
{
    var nested = function() { return param; }
    function child()
    {
        eval("escape = nested");
    }
    child();
}

test("test1");
WScript.Echo(escape());

test("test2");
WScript.Echo(escape());

