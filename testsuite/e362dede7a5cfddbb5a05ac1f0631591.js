load("201224b0d1c296b45befd2285e95dd42.js");
function test1() {
    try {
	return "try";
    } finally {
	return "finally";
    }
}
assertEq(test1(), "finally");

function test2() {
    try {
	throw 4;
    } catch(e) {
	return "catch";
    } finally {
	return "finally";
    }
}
assertEq(test2(), "finally");

function test3() {
    try {
	throw 4;
    } finally {
	return "finally"; // Don't rethrow.
    }
}
assertEq(test3(), "finally");
