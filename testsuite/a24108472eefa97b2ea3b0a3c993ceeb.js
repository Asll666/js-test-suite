load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this))
    quit();

evalcx(`
    eval('\
        var appendToActual = function(s) {};\
        gczeal = function() {};\
        gcslice = function() {};\
        selectforgc = function() {};\
        if (!("verifyprebarriers" in this)) {\
            verifyprebarriers = function() {};\
        }\
    ');
    oomTest(() => eval('Array(..."")'));
    if ('Intl' in this)
        new Intl.NumberFormat().format(0);
`, newGlobal());
