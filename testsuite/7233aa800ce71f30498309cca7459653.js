load("201224b0d1c296b45befd2285e95dd42.js");
var s = 'abcdFF0123456789012345fail';
s = s.replace("abcd", "0123456789012345678901234567890123456789012FF");
s = s.replace("FF0123456789012345fail", "ok");
assertEq(s, '0123456789012345678901234567890123456789012FFok');
