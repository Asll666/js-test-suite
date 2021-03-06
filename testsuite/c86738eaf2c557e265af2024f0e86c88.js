load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function returnTrue(x,y,z)
{
    WScript.Echo("value:"+ x + " index:" + y + " Object:" + z);
    return true;
}

function returnFalse(x,y,z)
{
    WScript.Echo("value:"+ x + " index:" + y + " Object:" + z);
    return false;
}

function returnRandom(x,y,z)
{
    WScript.Echo("value:"+ x + " index:" + y + " Object:" + z);
    return y!=1;
}

Array.prototype[6] = 20;

var x = [1,2,3,4,5];
var y = x.filter(returnTrue,this);
WScript.Echo(y);

x = [10,20,30,40,50];
y = x.filter(returnFalse, this);
WScript.Echo(y);

x = [10,20,30,40,50];
y = x.filter(returnRandom, this);
WScript.Echo(y);

x = {0: "abc", 1: "def", 2: "xyz"}
x.length = 3;

y = Array.prototype.filter.call(x, returnTrue,this);
WScript.Echo(y);

y = Array.prototype.filter.call(x, returnFalse,this);
WScript.Echo(y);

y = Array.prototype.filter.call(x, returnRandom, this);
WScript.Echo(y);

x = [10,20,30,40,50];
x[8] = 10;
y = x.filter(returnTrue, this);
WScript.Echo(y);
