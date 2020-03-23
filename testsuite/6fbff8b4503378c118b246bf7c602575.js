load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("fec05e691cc28279400c1df89b47a7cf.js");
// |reftest| skip-if(!xulRuntime.shell) -- uses shell load() function

var BUGNUMBER = 918987;
var summary = 'String.prototype.normalize - part2';

print(BUGNUMBER + ": " + summary);

function test() {
  load("51ff2a2421b7127f6daaeb0b972740de.js");

  for (var test2 of tests_part2) {
    runNormalizeTest(test2);
  }
}

if ("normalize" in String.prototype) {
  // String.prototype.normalize is not enabled in all builds.
  test();
}

if (typeof reportCompare === "function")
  reportCompare(true, true);
