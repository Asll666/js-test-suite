load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If (Evaluate Statement).type is "continue" and (Evaluate Statement).target is in the current label set, iteration of labeled "var-loop" breaks
 *
 * @path ch12/12.6/12.6.3/S12.6.3_A11.1_T3.js
 * @description Trying to continue non-existent label
 * @negative
 */

__str="";

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
outer:for(var index=0;index<4;index+=1){
    nested:for(var index_n=0;index_n<=index;index_n++){
        if(index*index_n == 6)continue nonexist;
        __str+=""+index+index_n;
    }
}
//
//////////////////////////////////////////////////////////////////////////////




