load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("99af2c3994932cf7fcec8ec85c6dc330.js");
if (typeof detachArrayBuffer === "function") {
    const originalNumberToLocaleString = Number.prototype.toLocaleString;

    // Throws if array buffer is detached.
    for (let constructor of typedArrayConstructors) {
        let typedArray = new constructor(42);
        detachArrayBuffer(typedArray.buffer);
        assertThrowsInstanceOf(() => typedArray.toLocaleString(), TypeError);
    }

    // Throws a TypeError if detached in Number.prototype.toLocaleString.
    for (let constructor of typedArrayConstructors) {
        Number.prototype.toLocaleString = function() {
            "use strict";
            if (!detached) {
                detachArrayBuffer(typedArray.buffer);
                detached = true;
            }
            return this;
        };

        // No error for single element arrays.
        let detached = false;
        let typedArray = new constructor(1);
        assertEq(typedArray.toLocaleString(), "0");
        assertEq(detached, true);

        // TypeError if more than one element is present.
        detached = false;
        typedArray = new constructor(2);
        assertThrowsInstanceOf(() => typedArray.toLocaleString(), TypeError);
        assertEq(detached, true);
    }
    Number.prototype.toLocaleString = originalNumberToLocaleString;
}

if (typeof reportCompare === "function")
    reportCompare(true, true);
