load("201224b0d1c296b45befd2285e95dd42.js");
// Removing and re-adding entries while an iterator is live causes the iterator to visit them again.

var set = new Set(['a']);
var n = 5;
for (let v of set) {
    assertEq(v, 'a');
    if (n === 0)
        break;
    set.delete('a');
    set.add('a');
    n--;
}
assertEq(n, 0);