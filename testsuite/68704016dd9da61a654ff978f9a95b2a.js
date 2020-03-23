load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var A = new Int8Array(100);
var str = "123.12";

function FAIL(x, y)
{
    WScript.Echo("FAILED\n");
    WScript.Echo("Expected "+y+", got "+x+"\n");
    throw "FAILED";
}

function foo()
{
    var y = 0;
    for (var i = 0; i < 100; i+=4) {
        A[i] = i;
    A[i+1] = i + 0x7a;
        A[i+2] = i+0.34;
    A[i+3] = str;
    }

    for (var i = 0; i < 100; i++)
    {
        y += A[i];
    A[i] = 0;
    }
    return y;
}

var expected = 3837;
var r;

for (var i = 0; i < 1000; i++)
{
    r = foo();

    if (r !== expected)
        FAIL(r, expected);
}

WScript.Echo("Passed\n");
