load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
// Contributors: Jesse Ruderman <jruderman@gmail.com>,
//               Gary Kwong <gary@rumblingedge.com>,
//               Jason Orendorff <jorendorff@mozilla.com>

try {
    evalcx('var p;', []);
} catch (exc) {}

try {
    evalcx('');
    Function("evalcx(\"var p\",[])")();
} catch (exc) {}

try {
    evalcx('var p;');
} catch (exc) {}

reportCompare(0, 0, "ok");
