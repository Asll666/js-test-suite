load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    var o = [ 1, 2, 3, 4, 5 ];

    for (var i = 6; i < 10; ++i)
	o.push(i);

    return o;
}

var o = f();

assertEq(o.join(','), [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ].join(','));