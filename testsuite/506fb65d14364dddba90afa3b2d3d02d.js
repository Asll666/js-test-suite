load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("1b3dbc1cddb6b5cc8ace501cab6be659.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

// See bug 627984 comment 20.
var obj = {m: function () {}};
obj.watch("m", function () { throw 'FAIL'; });
var f = obj.m;  // don't call the watchpoint

reportCompare(0, 0, 'ok');
