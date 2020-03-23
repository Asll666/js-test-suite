load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Applaing negation to boolean works well
 *
 * @path ch08/8.3/S8.3_A3.js
 * @description Check not false equals true, not true equals false
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!false !== true){
  $ERROR('#1: !false === true');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!false != true){
  $ERROR('#2: !false == true');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (!true !== false){
  $ERROR('#3: !true === false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (!true != false){
  $ERROR('#4: !true == false');
}
//
//////////////////////////////////////////////////////////////////////////////
