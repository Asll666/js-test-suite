load("201224b0d1c296b45befd2285e95dd42.js");
function f(x) {
    x((x | 0) + x);
};
try {
    f(1);
} catch (e) {}
for (var k = 0; k < 1; ++k) {
    try {
        f(Symbol());
    } catch (e) {}
}
