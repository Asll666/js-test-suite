load("201224b0d1c296b45befd2285e95dd42.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
function testProperty(i)
{
  actual = obj[String(i)];
}

var obj = {};
var index = [null, 1073741824, 1073741825];
for (var j in index)
  testProperty(index[j]);
