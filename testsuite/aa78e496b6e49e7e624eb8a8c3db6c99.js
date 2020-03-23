load("201224b0d1c296b45befd2285e95dd42.js");
function testFloat32SetElemIC(a) {
  for (var i = 0; i < a.length; i++) {
    var r = Math.fround(Number.MAX_VALUE);
    a[i] = r;
    assertEq(a[i], r);
  }
}
testFloat32SetElemIC(new Array(2048));
testFloat32SetElemIC(new Float32Array(2048));
