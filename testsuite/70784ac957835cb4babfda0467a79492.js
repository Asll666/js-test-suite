load("201224b0d1c296b45befd2285e95dd42.js");

function foo(a, b) {
    function bar() {
	return b;
    }
    return arguments[0] + arguments[1] + bar();
}
foo(1, 2);
