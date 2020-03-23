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

// Tests for simple assignments and literals inside an anonymous function

// Test simple return statement.
assertEquals(8, eval("(function() { return 8; })()"));

// Test simple assignment
var code = "(function() {\
               var a;\
               a = 8;\
               return a;\
             })()";
assertEquals(8, eval(code));

code = "(function() {\
           var x;\
           x = 'abc';\
           return x;\
         })()";
assertEquals("abc", eval(code));

// Test assignment as an RHS expression

code = "(function() {\
           var x, y;\
           x = y = 8;\
           return x;\
         })()";
assertEquals(8, eval(code));


code = "(function() {\
           var x, y;\
           x = y = 8;\
           return y;\
         })()";
assertEquals(8, eval(code));


code = "(function() {\
           var x,y,z;\
           return x = y = z = 8;\
         })()";
assertEquals(8, eval(code));

// Test object literals.
var a, b;
code = "a = {x:8}";
eval(code);
assertEquals(8, a.x);

code = "b = {x:a, y:'abc'}";
eval(code);
assertEquals(a, b.x);
assertEquals(8, b.x.x);
assertEquals("abc", b.y);

code = "({x:8, y:9}); 10";
assertEquals(10, eval(code));

code = "({x:8, y:9})";
eval(code);
assertEquals(9, eval(code+".y"));

code = "a = {2:8, x:9}";
eval(code);
assertEquals(8, a[2]);
assertEquals(8, a["2"]);
assertEquals(9, a["x"]);

// Test regexp literals.

a = /abc/;

assertEquals(/abc/, a);

code = "/abc/; 8";
assertEquals(8, eval(code));
