load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var crossSiteGlo = WScript.LoadScriptFile("c11a42bee8f58b6bba27b9b63c951559.js", "samethread");


Object.defineProperty(Array.prototype, "1", { value: "const", writable: false });

function test()
{
var arr = new Array(2);
arr[0] = 0;
arr[1] = 1;
WScript.Echo(arr);
crossSiteGlo.SetArrayIndex(arr, 1);
WScript.Echo(arr);
}

test();
test();

