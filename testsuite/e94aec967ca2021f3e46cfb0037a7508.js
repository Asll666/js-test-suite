load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: SyntaxError
{
    const x = 0;
    function x() { }
}