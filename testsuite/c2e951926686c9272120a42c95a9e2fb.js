load("201224b0d1c296b45befd2285e95dd42.js");
"use strict";
function test() {
    for (var i=0; i<10; i++) {
        try {
            var arr = [];
            arr[0] = 1;
            Object.freeze(arr);
            arr[0] = 2;
        } catch (e) {
            assertEq(e.toString().includes("TypeError: 0 is read-only"), true);
        }
    }
}
test();
