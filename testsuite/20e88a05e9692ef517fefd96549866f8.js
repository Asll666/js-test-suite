load("201224b0d1c296b45befd2285e95dd42.js");
function test() {
  for(var i=0; i<2; i++) {
    var a = /a/;
    assertEq(a.lastIndex, 0);
    a.exec("aaa");
    assertEq(a.lastIndex, 0);
  }

  for(var i=0; i<2; i++) {
    var a = /a/g;
    assertEq(a.lastIndex, 0);
    a.exec("aaa");
    assertEq(a.lastIndex, 1);
  }

  for(var i=0; i<2; i++) {
    var a = /a/y;
    assertEq(a.lastIndex, 0);
    a.exec("aaa");
    assertEq(a.lastIndex, 1);
  }
}

test();
test();
