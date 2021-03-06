load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
this.WScript.LoadScriptFile("42adbbe52993f32c4bd1a7e3e35e8a4b.js");

var sf0 = SIMD.Uint32x4(1, -2, 3, 0);
var sf1 = SIMD.Uint32x4(1, -2, 3, 0);
var sf2 = SIMD.Uint32x4(1, -2, 13, 0);
var sf3 = SIMD.Uint32x4(0, Infinity, NaN, -0);

function testConstructor()
{
    ////////////////////
    //Constructor
    ///////////////////
    equal("object", typeof SIMD.Uint32x4.prototype);
    equal("function", typeof SIMD.Uint32x4.prototype.constructor);
    equal("function", typeof SIMD.Uint32x4.prototype.toString);
    equal("function", typeof SIMD.Uint32x4.prototype.toLocaleString);
    equal("function", typeof SIMD.Uint32x4.prototype.valueOf);
    equal(SIMD.Uint32x4, SIMD.Uint32x4.prototype.constructor);

    descriptor = Object.getOwnPropertyDescriptor(SIMD.Uint32x4, 'prototype');
    equal(false, descriptor.writable);
    equal(false, descriptor.enumerable);
    equal(false, descriptor.configurable); 
}

function testToStringTag()
{
    ///////////////////
    //SIMDConstructor.prototype [ @@toStringTag ]
    ///////////////////
    var sym = Symbol('sym');
    var symbol_object = Object(sym);
    equal("SIMD.Uint32x4", SIMD.Uint32x4.prototype[Symbol.toStringTag]);

    descriptor = Object.getOwnPropertyDescriptor(SIMD.Uint32x4.prototype, Symbol.toStringTag);
    equal(false, descriptor.writable);
    equal(false, descriptor.enumerable);
    equal(true, descriptor.configurable);
}

function testToPrimitive()
{
    ///////////////////
    //SIMDConstructor.prototype [ @@toPrimitive ] 
    ///////////////////
    equal("function",typeof SIMD.Uint32x4.prototype[Symbol.toPrimitive]);
    equal(1, SIMD.Uint32x4.prototype[Symbol.toPrimitive].length);

    descriptor = Object.getOwnPropertyDescriptor(SIMD.Uint32x4.prototype, Symbol.toPrimitive);
    equal(false, descriptor.writable);
    equal(false, descriptor.enumerable);
    equal(true, descriptor.configurable);

    var functionToString = SIMD.Uint32x4.prototype[Symbol.toPrimitive].toString();
    var actualName = functionToString.substring(9, functionToString.indexOf('('));
    equal("[Symbol.toPrimitive]",actualName);

    ///////////////////////////
    //Overriding @@ToPrimitive
    ///////////////////////////
    SIMD.Uint32x4.prototype[Symbol.toPrimitive] = undefined;
    var G;
    var functionBackup = SIMD.Uint32x4.prototype.toLocaleString;
    SIMD.Uint32x4.prototype.toLocaleString = function(){
        G = this;
    }
    sf0.toLocaleString();
    try{var x =  G + G;}
    catch(e)
    {equal("Error: Number expected", e);}  //@@toPrimitive is not writable

    //@@toPrimitive is configurable. 
    memberBackup = Object.getOwnPropertyDescriptor(SIMD.Uint32x4.prototype, Symbol.toPrimitive);
    delete SIMD.Uint32x4.prototype[Symbol.toPrimitive];
    SIMD.Uint32x4.prototype[Symbol.toPrimitive] = function() { return 1;}
    equal(2, G + G);
    equal(0, G - G);
    equal(1, G * G);
    equal(1, G / G);
    equal(true, G == G);
    equal(true, G === G);
    equal(false, G > G);
    equal(true, G >= G);
    equal(false, G < G);
    equal(true, G >= G);

    delete SIMD.Uint32x4.prototype[Symbol.toPrimitive];
    SIMD.Uint32x4.prototype[Symbol.toPrimitive] = function() { return undefined;}
    equal(NaN, G + G);
    equal(NaN, G - G);
    equal(NaN, G * G);
    equal(NaN, G / G);
    equal(true, G == G);
    equal(true, G === G);
    equal(false, G > G);
    equal(false, G >= G);
    equal(false, G < G);
    equal(false, G >= G);

    delete SIMD.Uint32x4.prototype[Symbol.toPrimitive];
    SIMD.Uint32x4.prototype[Symbol.toPrimitive] = function() { return "test";}
    equal("testtest", G + G);
    equal(NaN, G - G);
    equal(NaN, G * G);
    equal(NaN, G / G);
    equal(true, G == G);
    equal(true, G === G);
    equal(false, G > G);
    equal(true, G >= G);
    equal(false, G < G);
    equal(true, G >= G);

    delete SIMD.Uint32x4.prototype[Symbol.toPrimitive];
    SIMD.Uint32x4.prototype[Symbol.toPrimitive] = 5;
    try{var x =  G + G;}
    catch(e)
    {equal("TypeError: The value of the property 'Symbol.toPrimitive' is not a Function object", e);}

    SIMD.Uint32x4.prototype[Symbol.toPrimitive] = memberBackup;
    SIMD.Uint32x4.prototype.toLocaleString = functionBackup
}

function testValueOf()
{
    ///////////////////
    //ValueOf
    ///////////////////
    descriptor = Object.getOwnPropertyDescriptor(SIMD.Uint32x4.prototype, 'valueOf');
    equal(true, descriptor.writable);
    equal(false, descriptor.enumerable);
    equal(true, descriptor.configurable);
    equal("uint32x4", typeof sf0.valueOf());
    equal("SIMD.Uint32x4(1, 4294967294, 3, 0)",sf0.valueOf().toString());
}

function testToString_LocaleString()
{
    ///////////////////
    //ToString / ToLocaleString
    ///////////////////
    descriptor = Object.getOwnPropertyDescriptor(SIMD.Uint32x4.prototype, 'toString');
    equal(true, descriptor.writable);
    equal(false, descriptor.enumerable);
    equal(true, descriptor.configurable);

    descriptor = Object.getOwnPropertyDescriptor(SIMD.Uint32x4.prototype, 'toLocaleString');
    equal(true, descriptor.writable);
    equal(false, descriptor.enumerable);
    equal(true, descriptor.configurable);

    equal("SIMD.Uint32x4(1, 4294967294, 3, 0)", sf0.toString()); //If float use ToString on lanes, the right values will be available.
    equal("SIMD.Uint32x4(1, 4,294,967,294, 3, 0)", sf0.toLocaleString());
    equal("SIMD.Uint32x4(0, 0, 0, 0)", sf3.toString()); 
    // equal("SIMD.Uint32x4(0, ?, NaN, 0)", sf3.toLocaleString());   //How should this work?
    var functionBackup = SIMD.Uint32x4.prototype.toLocaleString;
    var G5;
    SIMD.Uint32x4.prototype.toLocaleString = function() {
        G5 = this;
        return "NEWTOSTRING";
    }

    equal("undefined", typeof(G5));
    equal("NEWTOSTRING", sf0.toLocaleString());
    equal("object", typeof(G5));
    equal("NEWTOSTRING", G5.toLocaleString());
    equal("NEWTOSTRING", sf0.toLocaleString());
    SIMD.Uint32x4.prototype.toLocaleString  = functionBackup;

    ///////////////////
    //PrototypeLinking toString
    ///////////////////
    functionBackup = SIMD.Uint32x4.prototype.toString;
    SIMD.Uint32x4.prototype.toString = function() {
        G = this;
        return "NEWTOSTRING";
    }

    equal("undefined", typeof(G));
    equal("NEWTOSTRING", sf0.toString());
    equal("object", typeof(G));
    equal("NEWTOSTRING", G.toString());
    equal("NEWTOSTRING", sf0.toString());
    SIMD.Uint32x4.prototype.toString = functionBackup;
}

function testProtoLinking()
{
    ///////////////////
    //Inheritance 
    ///////////////////
    SIMD.Uint32x4.prototype.myToString = function() {
        return "MYTOSTRING";
    }
    equal("MYTOSTRING", sf0.myToString());
    equal("MYTOSTRING", G.myToString());

    ///////////////////
    //PrototypeLinking valueOf
    ///////////////////
    var functionBackup = SIMD.Uint32x4.prototype.valueOf;
    SIMD.Uint32x4.prototype.valueOf = function() {
        G1 = this;
        return  "NEWVALUEOF";
    }

    var G1;
    equal("undefined", typeof(G1));
    equal("NEWVALUEOF", sf0.valueOf());
    equal("object", typeof(G1));
    equal("NEWVALUEOF", G1.valueOf());
    equal("NEWVALUEOF", sf0.valueOf());
    SIMD.Uint32x4.prototype.valueOf = functionBackup;
}

function testValueSemantics() 
{
    ///////////////////
    //Value semantics
    ///////////////////
    equal(true, (sf0 == sf0));
    equal(true, (sf0 === sf0));
    equal(true, (sf0 == sf1));
    equal(true, (sf0 === sf1));
    equal(false, (sf0 == sf2));
    equal(false, (sf0 === sf2));

    ///////////////////
    //Comparision
    //////////////////
    try{var x = sf0 > sf1;}
    catch(e)
    {equal("TypeError: SIMD type: cannot be converted to a number", e);}

    try{var x = sf0 < sf1;}
    catch(e)
    {equal("TypeError: SIMD type: cannot be converted to a number", e);}

    try{var x = sf0 >= sf1;}
    catch(e)
    {equal("TypeError: SIMD type: cannot be converted to a number", e);}

    try{var x = sf0 <= sf1;}
    catch(e)
    {equal("TypeError: SIMD type: cannot be converted to a number", e);}

    ///////////////////////
    //Arithmetic operators
    ///////////////////////

    equal("SIMD.Uint32x4(0, 0, 0, 0)test", sf3 + "test");
    equal("testSIMD.Uint32x4(0, 0, 0, 0)", "test" + sf3);

    try{var x =  sf3 + sf3;}
    catch(e)
    {equal("Error: Number expected", e);} //Check

    try{var x =  sf3 - sf3;}
    catch(e)
    {equal("Error: Number expected", e);} 

    try{var x =  sf3 / sf3;}
    catch(e)
    {equal("Error: Number expected", e);} 

    try{var x =  sf3 * sf3;}
    catch(e)
    {equal("Error: Number expected", e);}
}

function testUseCase1()
{
    var f4val = SIMD.Uint32x4(0, 1, 2, -3);
    SIMD.Uint32x4.prototype.horizontalSum = function()
    {
        var value = this.valueOf();
        var sum = SIMD.Uint32x4.extractLane(value, 0) +
                  SIMD.Uint32x4.extractLane(value, 1) +
                  SIMD.Uint32x4.extractLane(value, 2) +
                  SIMD.Uint32x4.extractLane(value, 3);
        return sum;
    }

    equal(4294967296, f4val.horizontalSum());
}

function testWrapperObject() 
{

    testConstructor();
    testToStringTag();
    testToPrimitive();
    testValueOf();
    testToString_LocaleString();
    testProtoLinking();
    testValueSemantics();
    testUseCase1()
}

testWrapperObject();
print("PASS");
