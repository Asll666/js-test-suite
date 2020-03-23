load("201224b0d1c296b45befd2285e95dd42.js");
if (typeof parseRegExp === 'undefined')
    quit();

load("6932decb34dbc6eea751e706a2a0650f.js");

test("a|\u3042", all_flags,
     Disjunction([
         Atom("a"),
         Atom("\u3042")
     ]));

test("a|\u3042|abc", all_flags,
     Disjunction([
         Atom("a"),
         Atom("\u3042"),
         Atom("abc")
     ]));

test("|", all_flags,
     Disjunction([
         Empty(),
         Empty()
     ]));

test("||", all_flags,
     Disjunction([
         Empty(),
         Empty(),
         Empty()
     ]));

test("abc|", all_flags,
     Disjunction([
         Atom("abc"),
         Empty()
     ]));

test("|abc", all_flags,
     Disjunction([
         Empty(),
         Atom("abc")
     ]));