load("201224b0d1c296b45befd2285e95dd42.js");
function testObjectOrderedCmp()
{
  var a = new Array(5);
  for(var i=0;i<5;++i) a[i] = ({} < {});
  return a.join(",");
}
assertEq(testObjectOrderedCmp(), "false,false,false,false,false");
