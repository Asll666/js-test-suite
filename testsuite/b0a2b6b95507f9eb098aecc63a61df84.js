load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this))
    quit();
function f(x) {
    oomTest(() => eval(x));
}
f("");
f("");
f(`eval([   "x = \`\${new Error.lineNumber}" ].join())`);
