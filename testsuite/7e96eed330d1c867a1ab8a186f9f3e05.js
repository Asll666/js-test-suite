load("58b503bd09c74262366b2fa86d28cbbf.js");
load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var Debug = debug.Debug;
var step_count = 0;

function listener(event, execState, eventData, data) {
  if (event != Debug.DebugEvent.Break) return;
  try {
    var line = execState.frame(0).sourceLineText();
    print(line);
    var [match, expected_count, step] = /\/\/ B(\d) (\w+)$/.exec(line);
    assertEquals(step_count++, parseInt(expected_count));
    if (step != "Continue") execState.prepareStep(Debug.StepAction[step]);
  } catch (e) {
    print(e, e.stack);
    quit(1);
  }
}

Debug.setListener(listener);

var late_resolve;

function g() {
  return new Promise(  // B3 StepOut
    function(res, rej) {
      late_resolve = res;
    }
  );
}

async function f() {
  var a = 1;
  debugger;            // B0 StepNext
  a +=                 // B1 StepNext
       await           // B4 StepNext
             g();      // B2 StepIn
  return a;            // B5 StepNext
}                      // B6 Continue

f();

late_resolve(3);

%RunMicrotasks();

assertEquals(7, step_count);
