load("201224b0d1c296b45befd2285e95dd42.js");
// Don't segfault. Reduced from V8 deltablue.

function output(c, dir) {
  return (dir) ? c.v1 : c.v1;
}

var constraint = {
  v1 : {}
}

for (i=0; i<100; i++){
  output(constraint, 0)
  output(constraint, 1);
}
