load("201224b0d1c296b45befd2285e95dd42.js");
load("dc4b20628140c803c89c741458a4c2d0.js");

var check = [];
function t(token) {
    check.push(token);
    return token;
}
let f = (...x) => x;
f(3, ...[t(1)], ...[t(2), t(3)], 34, 42, ...[t(4)]);
assertEqArray(check, [1, 2, 3, 4]);

var arr = [1, 2, 3];
assertEqArray(f(...arr, arr.pop()), [1, 2, 3, 3]);