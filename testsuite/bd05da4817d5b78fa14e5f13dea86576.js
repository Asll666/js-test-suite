load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

WScript.Echo("Before"); /**bp:resume('step_over');stack();resume('step_over');stack();resume('step_over');stack();resume('step_over');stack();resume('step_over');stack();resume('step_over');stack();resume('step_over');stack()**/
for (i in [1,2]) {
                WScript.Echo(i);
}
WScript.Echo("After");

