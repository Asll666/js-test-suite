load("201224b0d1c296b45befd2285e95dd42.js");
// Binary: cache/js-dbg-64-21e90d198613-linux
// Flags:
//
load("6ec98b17981f95f4363b8bc9869495e2.js");

var x  = {};
function jsTestDriverEnd()
{
  for (var optionName in x)
  {
  }
  x = {};
}

var o2 = this;
var o5 = Object.prototype;

function f28(o) {
  var _var_ = o;
  if (globalPrototypeChainIsMutable())
    _var_['__proto_'+'_'] = null;
}

function _var_(f7) {
  function f15(o) {}
}

function f39(o) {
  for(var j=0; j<5; j++) {
    try { o.__proto__ = o2; } catch(e) {}
  }
}

for(var i=0; i<11; i++) {
  f39(o5);
  f28(o2);
}

jsTestDriverEnd();

{
  delete Function;
}

jsTestDriverEnd();
