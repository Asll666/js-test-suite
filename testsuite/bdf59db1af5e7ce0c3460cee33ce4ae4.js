load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
// |reftest| skip
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
// Contributors: Gary Kwong <gary@rumblingedge.com>
//               Jason Orendorff <jorendorff@mozilla.com>

// on a non-global object
var x = {};
x.watch("p", function () { evalcx(''); });
x.p = 0;

// on the global
watch("e", (function () { evalcx(''); }));
e = function () {};

reportCompare(0, 0, "ok");
