load("201224b0d1c296b45befd2285e95dd42.js");
// Bug 976697. Check for various quirks when instantiating a typed
// object atop a detached buffer.

if (typeof TypedObject === "undefined")
  quit();

load("19d7bc83becec11ee32c3a85fbc4d93d.js")

var {StructType, uint32, Object, Any, storage, objectType} = TypedObject;

function main() { // once a C programmer, always a C programmer.
  var Uints = uint32.array(0);
  var Unit = new StructType({});   // Empty struct type
  var buffer = new ArrayBuffer(0); // Empty buffer
  var p = new Unit(buffer);        // OK
  detachArrayBuffer(buffer);
  assertThrowsInstanceOf(() => new Unit(buffer), TypeError,
                         "Able to instantiate atop detached buffer");
  assertThrowsInstanceOf(() => new Uints(buffer), TypeError,
                         "Able to instantiate atop detached buffer");
}

main();
