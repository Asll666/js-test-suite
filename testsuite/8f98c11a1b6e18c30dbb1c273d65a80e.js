load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| --no-threads; --no-ion; --no-baseline
if (!("gczeal" in this))
    quit();
gczeal(2);
(function() {
    evaluate(cacheEntry((function() {
        return "".toSource()
    })()), Object.create({ global: newGlobal({ cloneSingletons: true }) }, {
        saveBytecode: {
            value: true
        }
    }))
})();
[[0], [0], [0], [0], [0], [0], [0], [0], [0], [0],
 [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], 
 [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], 
 [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], 
 [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], 
 [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], 
 [0], [0], [0], [0], [0], [0], [0], [0], [0], [0],
 [0], [0], [0], [0], [0], [0], [0], [0], [0], [0],
 [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], 
 [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], 
 [0], [0], [0], [0]];
