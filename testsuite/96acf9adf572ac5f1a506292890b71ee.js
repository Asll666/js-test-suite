load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this))
    quit();
let s = saveStack();
oomTest(() => { saveStack(); });
