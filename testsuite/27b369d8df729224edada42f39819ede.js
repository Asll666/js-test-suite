load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(v) { WScript.Echo(v); }

Object.prototype.toString = function() { return "toString() Overwritten"; }

var o = new Object();

//
// Currently toString is not looked up and hence not called.
// Commenting for now
//
write(o);
