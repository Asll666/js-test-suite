load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 Aleksey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.9
esid: sec-proxy-object-internal-methods-and-internal-slots-set-p-v-receiver
description: >
    Pass to target's [[Set]] correct receiver if trap is missing
info: >
    [[Set]] (P, V, Receiver)

    7. If trap is undefined, then
        a. Return ? target.[[Set]](P, V, Receiver).
---*/

var context;
var target = {
    set attr(val) {
        context = this;
    }
};

var p = new Proxy(target, { set: null });
p.attr = 1;
assert.sameValue(context, p);

var pParent = Object.create(new Proxy(target, {}));
pParent.attr = 3;
assert.sameValue(context, pParent);
