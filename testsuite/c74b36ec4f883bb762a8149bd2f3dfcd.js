load("58b503bd09c74262366b2fa86d28cbbf.js");
load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2009 the V8 project authors. All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
//       copyright notice, this list of conditions and the following
//       disclaimer in the documentation and/or other materials provided
//       with the distribution.
//     * Neither the name of Google Inc. nor the names of its
//       contributors may be used to endorse or promote products derived
//       from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


Debug = debug.Debug

var exception = null;
var state = 1;
var expected_source_line_text = null;
var expected_function_name = null;

// Simple debug event handler which first time will cause 'step out' action
// and than check that execution is paused inside function
// expected_function_name.
function listener(event, exec_state, event_data, data) {
  try {
    if (event == Debug.DebugEvent.Break) {
      if (state == 1) {
        exec_state.prepareStep(Debug.StepAction.StepOut);
        state++;
      } else {
        assertEquals(expected_function_name, event_data.func().name());
        assertEquals(expected_source_line_text,
                     event_data.sourceLineText());
        state = 3;
      }
    }
  } catch(e) {
    exception = e;
  }
};

// Add the debug event listener.
Debug.setListener(listener);

var obj = {key:10};

function replacer(key, value) {
  if (key == 'key') {
    debugger;
  }
  return value;
}

// Test step into function call from a function without local variables.
function testStepOutToBuiltIn() {
  expected_function_name = 'testStepOutToBuiltIn';
  expected_source_line_text = '}  // expected line';
  JSON.stringify(obj, replacer);
}  // expected line

state = 1;
testStepOutToBuiltIn();
assertNull(exception);
assertEquals(3, state);

// Get rid of the debug event listener.
Debug.setListener(null);
