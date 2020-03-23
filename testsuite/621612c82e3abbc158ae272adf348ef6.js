load("201224b0d1c296b45befd2285e95dd42.js");
// Test that the same saved stack is only ever allocated once.

const stacks = [];

for (let i = 0; i < 10; i++) {
  stacks.push(saveStack());
}

const s = stacks.pop();
for (let stack of stacks) {
  assertEq(s, stack);
}
