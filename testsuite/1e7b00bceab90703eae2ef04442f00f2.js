load("188875624e386d01d46f59a2dbf5d1c9.js");
/**
    File Name:          lexical-035.js
    Correpsonds To:     7.4.2-12-n.js
    ECMA Section:       7.4.2

    Description:
    The following tokens are ECMAScript keywords and may not be used as
    identifiers in ECMAScript programs.

    Syntax

    Keyword :: one of
     break          for         new         var
     continue       function    return      void
     delete         if          this        while
     else           in          typeof      with

    This test verifies that the keyword cannot be used as an identifier.
    Functioinal tests of the keyword may be found in the section corresponding
    to the function of the keyword.

    Author:             christine@netscape.com
    Date:               12 november 1997

*/
    var SECTION = "lexical-035";
    var VERSION = "JS1_4";
    var TITLE   = "Keywords";

    startTest();
    writeHeaderToLog( SECTION + " "+ TITLE);

    var tc = 0;
    var testcases = new Array();

    var result = "Failed";
    var exception = "No exception thrown";
    var expect = "Passed";

    try {
        eval("var while");
    } catch ( e ) {
        result = expect;
        exception = e.toString();
    }

    testcases[tc++] = new TestCase(
        SECTION,
        "var while" +
        " (threw " + exception +")",
        expect,
        result );

    test();


