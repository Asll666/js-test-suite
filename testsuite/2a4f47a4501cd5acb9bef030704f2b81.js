load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this))
    quit();

oomTest(() => {
  var g = newGlobal();
  g.eval("\
    function f(){}; \
    getLcovInfo(); \
  ");
});
