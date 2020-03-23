load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-prop-name-evaluation.case
// - src/dstr-assignment/default/assignment-expr.template
/*---
description: PropertyName of an AssignmentProperty may be a ComputedPropertyName. (AssignmentExpression)
esid: sec-variable-statement-runtime-semantics-evaluation
es6id: 13.3.2.4
features: [destructuring-binding]
flags: [generated]
info: |
    VariableDeclaration : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let rval be GetValue(rhs).
    3. ReturnIfAbrupt(rval).
    4. Return the result of performing BindingInitialization for
       BindingPattern passing rval and undefined as arguments.
---*/
var x, y, xy;

var result;
var vals = { x: 1, xy: 23, y: 2 };

result = { ['x' + 'y']: x } = vals;

assert.sameValue(x, 23);
assert.sameValue(y, undefined);
assert.sameValue(xy, undefined);

assert.sameValue(result, vals);
