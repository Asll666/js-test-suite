load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
// |reftest| fails-if(!xulRuntime.shell)
reportCompare(typeof(evalcx("/x/")), "object")
