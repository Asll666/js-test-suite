load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

function testFewerGlobalsInInnerTree() {
    for each (a in [new Number(1), new Number(1), {}, {}, new Number(1)]) {
        for each (b in [2, "", 2, "", "", ""]) {
		    for each (c in [{}, {}, 3, 3, 3, 3, {}, {}]) {
                4 + a;
			}
		}
	}
    delete a;
    delete b;
    delete c;
    return "ok";
}
assertEq(testFewerGlobalsInInnerTree(), "ok");
