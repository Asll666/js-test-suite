load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
// |reftest| skip-if(!xulRuntime.shell) -- needs drainJobQueue

if (!this.Promise) {
    this.reportCompare && reportCompare(true,true);
    quit(0);
}

// Resolve Promise with itself by directly calling the "Promise Resolve Function".
let resolve;
let promise = new Promise(function(x) { resolve = x; });
resolve(promise)

let results = [];
promise.then(res => assertEq(true, false, "not reached")).catch(res => {
    assertEq(res instanceof TypeError, true);
    results.push("rejected");
});

drainJobQueue()

assertEq(results.length, 1);
assertEq(results[0], "rejected");


// Resolve Promise with itself when the "Promise Resolve Function" is called
// from (the fast path in) PromiseReactionJob.
results = [];

promise = new Promise(x => { resolve = x; });
let promise2 = promise.then(() => promise2);

promise2.then(() => assertEq(true, false, "not reached"), res => {
    assertEq(res instanceof TypeError, true);
    results.push("rejected");
});

resolve();

drainJobQueue();

assertEq(results.length, 1);
assertEq(results[0], "rejected");


this.reportCompare && reportCompare(0, 0, "ok");
