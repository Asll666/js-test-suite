load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

actual = '';
expected = '0,undefined,0,undefined,1,undefined,0,undefined,1,undefined,0,undefined,1,undefined,nocrash,';

// bug 496987

for each(let a in ["", "", true, "", true, "", true]) {
    appendToActual((function() {
        for (var e in [0]) {
            appendToActual( + a)
        }
    })())
}

appendToActual('nocrash')


assertEq(actual, expected)
