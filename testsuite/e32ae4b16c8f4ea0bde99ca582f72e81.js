load("201224b0d1c296b45befd2285e95dd42.js");
function test() {
    function f(arr, i) {
        arr[3] |= i;
    }

    var a = [1, 2, 3, 4, 5];

    for (var i=0; i<100; i++) {
        f(a, i * 2);
    }
    assertEq(a[3], 254);
}
test();
