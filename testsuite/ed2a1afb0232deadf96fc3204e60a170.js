load("201224b0d1c296b45befd2285e95dd42.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

function f()
{
  return { *__proto__() {}, __proto__: null };
}

for (var i = 0; i < 2e3; i++)
  f();
