load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
load("7313fa08969f1df598c154ed8ced2840.js");
var re = /(z\1){3}/;
var str = 'zzz';
var actual = re.exec(str);
var expected = makeExpectedMatch(['zzz', 'z'], 0, str);
checkRegExpMatch(actual, expected);

if (typeof reportCompare == 'function')
    reportCompare(true, true);
