load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var bug = new Proxy(new Array(1), {has: () => true});
var a = bug.concat();
if (a[0] !== undefined || a.length !== 1) {
    print("failed");
} else {
    print("passed");
}
