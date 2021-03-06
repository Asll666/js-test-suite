load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
if (typeof Intl !== "object") {
    const localeSep = [,,].toLocaleString();

    const obj = {
        toLocaleString() {
            assertEq(arguments.length, 0);
            return "pass";
        }
    };

    // Ensure no arguments are passed to the array elements.
    // - Single element case.
    assertEq([obj].toLocaleString(), "pass");
    // - More than one element.
    assertEq([obj, obj].toLocaleString(), "pass" + localeSep + "pass");

    // Ensure no arguments are passed to the array elements even if supplied.
    const locales = {}, options = {};
    // - Single element case.
    assertEq([obj].toLocaleString(locales, options), "pass");
    // - More than one element.
    assertEq([obj, obj].toLocaleString(locales, options), "pass" + localeSep + "pass");
}

if (typeof reportCompare === "function")
    reportCompare(true, true);
