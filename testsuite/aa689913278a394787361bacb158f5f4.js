load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("f22a0d60dd8c199d50eb1a64119fffb7.js");
// This file was procedurally generated from the following sources:
// - src/annex-b-fns/eval-global-exsting-global-update.case
// - src/annex-b-fns/eval-global/direct-block.template
/*---
description: Variable-scoped binding is updated following evaluation (Block statement in eval code containing a function declaration)
esid: sec-web-compat-evaldeclarationinstantiation
es6id: B.3.3.3
flags: [generated, noStrict]
includes: [fnGlobalObject.js]
info: |
    B.3.3.3 Changes to EvalDeclarationInstantiation

    [...]
    b. When the FunctionDeclaration f is evaluated, perform the following steps
       in place of the FunctionDeclaration Evaluation algorithm provided in
       14.1.21:
       i. Let genv be the running execution context's VariableEnvironment.
       ii. Let genvRec be genv's EnvironmentRecord.
       iii. Let benv be the running execution context's LexicalEnvironment.
       iv. Let benvRec be benv's EnvironmentRecord.
       v. Let fobj be ! benvRec.GetBindingValue(F, false).
       vi. Perform ? genvRec.SetMutableBinding(F, fobj, false).
       vii. Return NormalCompletion(empty). 

---*/
Object.defineProperty(fnGlobalObject(), 'f', {
  value: function() { return 'Another function'; },
  enumerable: true,
  writable: true,
  configurable: false
});

eval(
  '{ function f() { return "function declaration"; } }'
);

assert.sameValue(typeof f, 'function');
assert.sameValue(f(), 'function declaration');