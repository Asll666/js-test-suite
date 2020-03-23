/* Lovingly generated by gen-spec-js.py based on the wonderful content of *
 * https://github.com/WebAssembly/spec/blob/master/interpreter/host/js.ml */
'use strict';

let soft_validate = true;

let spectest = {
  print: print || ((...xs) => console.log(...xs)),
  global: 666,
  table: new WebAssembly.Table({initial: 10, maximum: 20, element: 'anyfunc'}),
  memory: new WebAssembly.Memory({initial: 1, maximum: 2}),};

let registry = {spectest};
let $$;

function register(name, instance) {
  registry[name] = instance.exports;
}

function module(bytes) {
  let buffer = new ArrayBuffer(bytes.length);
  let view = new Uint8Array(buffer);
  for (let i = 0; i < bytes.length; ++i) {
    view[i] = bytes.charCodeAt(i);
  }
  return new WebAssembly.Module(buffer);
}

function instance(bytes, imports = registry) {
  return new WebAssembly.Instance(module(bytes), imports);
}

function assert_malformed(bytes) {
  try { module(bytes) } catch (e) {
    if (e instanceof WebAssembly.CompileError) return;
  }
  throw new Error("Wasm decoding failure expected");
}

function assert_invalid(bytes) {
  try { module(bytes) } catch (e) {
    if (e instanceof WebAssembly.CompileError) return;
  }
  throw new Error("Wasm validation failure expected");
}

function assert_soft_invalid(bytes) {
  try { module(bytes) } catch (e) {
    if (e instanceof WebAssembly.CompileError) return;
    throw new Error("Wasm validation failure expected");
  }
  if (soft_validate)
    throw new Error("Wasm validation failure expected");
}

function assert_unlinkable(bytes) {
  let mod = module(bytes);
  try { new WebAssembly.Instance(mod, registry) } catch (e) {
    if (e instanceof TypeError) return;
  }
  throw new Error("Wasm linking failure expected");
}

function assert_uninstantiable(bytes) {
  let mod = module(bytes);
  try { new WebAssembly.Instance(mod, registry) } catch (e) {
    if (e instanceof WebAssembly.RuntimeError) return;
  }
  throw new Error("Wasm trap expected");
}

function assert_trap(action) {
  try { action() } catch (e) {
    if (e instanceof WebAssembly.RuntimeError) return;
  }
  throw new Error("Wasm trap expected");
}

function assert_return(action, expected) {
  let actual = action();
  if (!Object.is(actual, expected)) {
    throw new Error("Wasm return value " + expected + " expected, got " + actual);
  };
}

function assert_return_nan(action) {
  let actual = action();
  if (!Number.isNaN(actual)) {
    throw new Error("Wasm return value NaN expected, got " + actual);
  };
}

let f32 = Math.fround;

$$ = instance("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x13\x04\x60\x00\x00\x60\x00\x01\x7f\x60\x01\x7e\x01\x7e\x60\x02\x7d\x7d\x01\x7d\x03\x20\x1f\x00\x00\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x02\x02\x03\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x07\xe9\x02\x1e\x05\x65\x6d\x70\x74\x79\x00\x01\x08\x73\x69\x6e\x67\x75\x6c\x61\x72\x00\x02\x05\x6d\x75\x6c\x74\x69\x00\x03\x06\x6e\x65\x73\x74\x65\x64\x00\x04\x04\x64\x65\x65\x70\x00\x05\x10\x61\x73\x2d\x75\x6e\x61\x72\x79\x2d\x6f\x70\x65\x72\x61\x6e\x64\x00\x06\x11\x61\x73\x2d\x62\x69\x6e\x61\x72\x79\x2d\x6f\x70\x65\x72\x61\x6e\x64\x00\x07\x0f\x61\x73\x2d\x74\x65\x73\x74\x2d\x6f\x70\x65\x72\x61\x6e\x64\x00\x08\x12\x61\x73\x2d\x63\x6f\x6d\x70\x61\x72\x65\x2d\x6f\x70\x65\x72\x61\x6e\x64\x00\x09\x0a\x62\x72\x65\x61\x6b\x2d\x62\x61\x72\x65\x00\x0a\x0b\x62\x72\x65\x61\x6b\x2d\x76\x61\x6c\x75\x65\x00\x0b\x0e\x62\x72\x65\x61\x6b\x2d\x72\x65\x70\x65\x61\x74\x65\x64\x00\x0c\x0b\x62\x72\x65\x61\x6b\x2d\x69\x6e\x6e\x65\x72\x00\x0d\x0a\x63\x6f\x6e\x74\x2d\x69\x6e\x6e\x65\x72\x00\x0e\x07\x65\x66\x66\x65\x63\x74\x73\x00\x0f\x05\x77\x68\x69\x6c\x65\x00\x10\x03\x66\x6f\x72\x00\x11\x07\x6e\x65\x73\x74\x69\x6e\x67\x00\x12\x08\x61\x73\x73\x65\x72\x74\x5f\x30\x00\x13\x08\x61\x73\x73\x65\x72\x74\x5f\x31\x00\x14\x08\x61\x73\x73\x65\x72\x74\x5f\x32\x00\x15\x08\x61\x73\x73\x65\x72\x74\x5f\x33\x00\x16\x08\x61\x73\x73\x65\x72\x74\x5f\x34\x00\x17\x08\x61\x73\x73\x65\x72\x74\x5f\x35\x00\x18\x08\x61\x73\x73\x65\x72\x74\x5f\x36\x00\x19\x08\x61\x73\x73\x65\x72\x74\x5f\x37\x00\x1a\x08\x61\x73\x73\x65\x72\x74\x5f\x38\x00\x1b\x08\x61\x73\x73\x65\x72\x74\x5f\x39\x00\x1c\x09\x61\x73\x73\x65\x72\x74\x5f\x31\x30\x00\x1d\x09\x61\x73\x73\x65\x72\x74\x5f\x31\x31\x00\x1e\x0a\xf2\x07\x1f\x02\x00\x0b\x08\x00\x03\x40\x0b\x03\x40\x0b\x0b\x0b\x00\x03\x40\x01\x0b\x03\x7f\x41\x07\x0b\x0b\x18\x00\x03\x40\x10\x00\x10\x00\x10\x00\x10\x00\x0b\x03\x7f\x10\x00\x10\x00\x10\x00\x41\x08\x0b\x0b\x15\x00\x03\x7f\x03\x40\x10\x00\x02\x40\x0b\x01\x0b\x03\x7f\x10\x00\x41\x09\x0b\x0b\x0b\x8b\x01\x00\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x10\x00\x41\x96\x01\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0a\x00\x03\x7f\x10\x00\x41\x0d\x0b\x68\x0b\x11\x00\x03\x7f\x10\x00\x41\x03\x0b\x03\x7f\x10\x00\x41\x04\x0b\x6c\x0b\x0a\x00\x03\x7f\x10\x00\x41\x0d\x0b\x45\x0b\x17\x00\x03\x7d\x10\x00\x43\x00\x00\x40\x40\x0b\x03\x7d\x10\x00\x43\x00\x00\x40\x40\x0b\x5e\x0b\x34\x00\x02\x40\x03\x40\x0c\x01\x0c\x00\x00\x0b\x0b\x02\x40\x03\x40\x41\x01\x0d\x01\x00\x0b\x0b\x02\x40\x03\x40\x41\x00\x0e\x00\x01\x00\x0b\x0b\x02\x40\x03\x40\x41\x01\x0e\x02\x01\x01\x01\x00\x0b\x0b\x41\x13\x0b\x10\x00\x02\x7f\x03\x7f\x41\x12\x0c\x01\x0c\x00\x41\x13\x0b\x0b\x0b\x34\x00\x02\x7f\x03\x7f\x41\x12\x0c\x01\x41\x13\x0c\x01\x41\x14\x41\x00\x0d\x01\x1a\x41\x14\x41\x01\x0d\x01\x1a\x41\x15\x0c\x01\x41\x16\x41\x00\x0e\x00\x01\x41\x17\x41\x01\x0e\x02\x01\x01\x01\x41\x15\x0b\x0b\x0b\x66\x01\x01\x7f\x41\x00\x21\x00\x20\x00\x02\x7f\x03\x7f\x02\x7f\x41\x01\x0c\x02\x0b\x0b\x0b\x6a\x21\x00\x20\x00\x02\x7f\x03\x7f\x03\x7f\x41\x02\x0c\x02\x0b\x0b\x0b\x6a\x21\x00\x20\x00\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x41\x04\x0c\x01\x0b\x0b\x0b\x0b\x6a\x21\x00\x20\x00\x02\x7f\x03\x7f\x41\x08\x0c\x01\x68\x0b\x0b\x6a\x21\x00\x20\x00\x02\x7f\x03\x7f\x03\x7f\x41\x10\x0c\x02\x0b\x68\x0b\x0b\x6a\x21\x00\x20\x00\x0b\x30\x01\x01\x7f\x41\x00\x21\x00\x20\x00\x03\x7f\x03\x7f\x0c\x01\x0b\x0b\x6a\x21\x00\x20\x00\x03\x7f\x0c\x00\x68\x0b\x6a\x21\x00\x20\x00\x03\x7f\x03\x7f\x0c\x01\x0b\x68\x0b\x6a\x21\x00\x20\x00\x0b\x32\x01\x01\x7f\x02\x40\x03\x40\x41\x01\x21\x00\x20\x00\x41\x03\x6c\x21\x00\x20\x00\x41\x05\x6b\x21\x00\x20\x00\x41\x07\x6c\x21\x00\x0c\x01\x20\x00\x41\xe4\x00\x6c\x21\x00\x0b\x0b\x20\x00\x41\x72\x46\x0b\x25\x01\x01\x7e\x42\x01\x21\x01\x02\x40\x03\x40\x20\x00\x50\x0d\x01\x20\x00\x20\x01\x7e\x21\x01\x20\x00\x42\x01\x7d\x21\x00\x0c\x00\x0b\x0b\x20\x01\x0b\x2b\x01\x02\x7e\x42\x01\x21\x01\x42\x02\x21\x02\x02\x40\x03\x40\x20\x02\x20\x00\x56\x0d\x01\x20\x01\x20\x02\x7e\x21\x01\x20\x02\x42\x01\x7c\x21\x02\x0c\x00\x0b\x0b\x20\x01\x0b\x5a\x01\x02\x7d\x02\x40\x03\x40\x20\x00\x43\x00\x00\x00\x00\x5b\x0d\x01\x20\x01\x21\x02\x02\x40\x03\x40\x20\x02\x43\x00\x00\x00\x00\x5b\x0d\x01\x20\x02\x43\x00\x00\x00\x00\x5d\x0d\x03\x20\x03\x20\x02\x92\x21\x03\x20\x02\x43\x00\x00\x00\x40\x93\x21\x02\x0c\x00\x0b\x0b\x20\x03\x20\x00\x95\x21\x03\x20\x00\x43\x00\x00\x80\x3f\x93\x21\x00\x0c\x00\x0b\x0b\x20\x03\x0b\x11\x00\x02\x40\x42\x00\x10\x10\x42\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x11\x00\x02\x40\x42\x01\x10\x10\x42\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x11\x00\x02\x40\x42\x02\x10\x10\x42\x02\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x11\x00\x02\x40\x42\x03\x10\x10\x42\x06\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x12\x00\x02\x40\x42\x05\x10\x10\x42\xf8\x00\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x19\x00\x02\x40\x42\x14\x10\x10\x42\x80\x80\xd0\x95\xc8\xef\xd9\xe1\x21\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x11\x00\x02\x40\x42\x00\x10\x11\x42\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x11\x00\x02\x40\x42\x01\x10\x11\x42\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x11\x00\x02\x40\x42\x02\x10\x11\x42\x02\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x11\x00\x02\x40\x42\x03\x10\x11\x42\x06\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x12\x00\x02\x40\x42\x05\x10\x11\x42\xf8\x00\x51\x45\x0d\x00\x0f\x0b\x00\x0b\x19\x00\x02\x40\x42\x14\x10\x11\x42\x80\x80\xd0\x95\xc8\xef\xd9\xe1\x21\x51\x45\x0d\x00\x0f\x0b\x00\x0b");
assert_return(() => $$.exports["empty"]());
assert_return(() => $$.exports["singular"](), 7);
assert_return(() => $$.exports["multi"](), 8);
assert_return(() => $$.exports["nested"](), 9);
assert_return(() => $$.exports["deep"](), 150);
assert_return(() => $$.exports["as-unary-operand"](), 0);
assert_return(() => $$.exports["as-binary-operand"](), 12);
assert_return(() => $$.exports["as-test-operand"](), 0);
assert_return(() => $$.exports["as-compare-operand"](), 0);
assert_return(() => $$.exports["break-bare"](), 19);
assert_return(() => $$.exports["break-value"](), 18);
assert_return(() => $$.exports["break-repeated"](), 18);
assert_return(() => $$.exports["break-inner"](), 31);
assert_return(() => $$.exports["effects"](), 1);
assert_return(() => $$.exports["assert_0"]());
assert_return(() => $$.exports["assert_1"]());
assert_return(() => $$.exports["assert_2"]());
assert_return(() => $$.exports["assert_3"]());
assert_return(() => $$.exports["assert_4"]());
assert_return(() => $$.exports["assert_5"]());
assert_return(() => $$.exports["assert_6"]());
assert_return(() => $$.exports["assert_7"]());
assert_return(() => $$.exports["assert_8"]());
assert_return(() => $$.exports["assert_9"]());
assert_return(() => $$.exports["assert_10"]());
assert_return(() => $$.exports["assert_11"]());
assert_return(() => $$.exports["nesting"](f32(0.0), f32(7.0)), f32(0.0));
assert_return(() => $$.exports["nesting"](f32(7.0), f32(0.0)), f32(0.0));
assert_return(() => $$.exports["nesting"](f32(1.0), f32(1.0)), f32(1.0));
assert_return(() => $$.exports["nesting"](f32(1.0), f32(2.0)), f32(2.0));
assert_return(() => $$.exports["nesting"](f32(1.0), f32(3.0)), f32(4.0));
assert_return(() => $$.exports["nesting"](f32(1.0), f32(4.0)), f32(6.0));
assert_return(() => $$.exports["nesting"](f32(1.0), f32(100.0)), f32(2550.0));
assert_return(() => $$.exports["nesting"](f32(1.0), f32(101.0)), f32(2601.0));
assert_return(() => $$.exports["nesting"](f32(2.0), f32(1.0)), f32(1.0));
assert_return(() => $$.exports["nesting"](f32(3.0), f32(1.0)), f32(1.0));
assert_return(() => $$.exports["nesting"](f32(10.0), f32(1.0)), f32(1.0));
assert_return(() => $$.exports["nesting"](f32(2.0), f32(2.0)), f32(3.0));
assert_return(() => $$.exports["nesting"](f32(2.0), f32(3.0)), f32(4.0));
assert_return(() => $$.exports["nesting"](f32(7.0), f32(4.0)), f32(10.3095235825));
assert_return(() => $$.exports["nesting"](f32(7.0), f32(100.0)), f32(4381.54785156));
assert_return(() => $$.exports["nesting"](f32(7.0), f32(101.0)), f32(2601.0));
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x05\x01\x60\x00\x01\x7f\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x03\x40\x0b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x05\x01\x60\x00\x01\x7e\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x03\x40\x0b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x05\x01\x60\x00\x01\x7d\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x03\x40\x0b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x05\x01\x60\x00\x01\x7c\x03\x02\x01\x00\x0a\x07\x01\x05\x00\x03\x40\x0b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x05\x01\x60\x00\x01\x7f\x03\x02\x01\x00\x0a\x08\x01\x06\x00\x03\x40\x01\x0b\x0b");
assert_invalid("\x00\x61\x73\x6d\x0d\x00\x00\x00\x01\x05\x01\x60\x00\x01\x7f\x03\x02\x01\x00\x0a\x0c\x01\x0a\x00\x03\x40\x43\x00\x00\x00\x00\x0b\x0b");