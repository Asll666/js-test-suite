load("201224b0d1c296b45befd2285e95dd42.js");
function TestCase(n, d, e, a) {
    this.expect = e;
    this.passed = getTestCaseResult(this.expect, this.actual);
}
function getTestCaseResult(expect, actual) {}
new TestCase(
	TestCase(3000000000.5)
);
new TestCase(null,null,	String('Sally and Fred are sure to come'.match(/^[a-z\s]*/i)));
