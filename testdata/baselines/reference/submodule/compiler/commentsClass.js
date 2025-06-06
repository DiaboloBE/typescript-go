//// [tests/cases/compiler/commentsClass.ts] ////

//// [commentsClass.ts]
/** This is class c2 without constuctor*/
class c2 {
} // trailing comment1
var i2 = new c2();
var i2_c = c2;
class c3 {
    /** Constructor comment*/
    constructor() {
    } // trailing comment of constructor
} /* trailing comment 2 */
var i3 = new c3();
var i3_c = c3;
/** Class comment*/
class c4 {
    /** Constructor comment*/
    constructor() {
    } /* trailing comment of constructor 2*/
}
var i4 = new c4();
var i4_c = c4;
/** Class with statics*/
class c5 {
    static s1: number;
}
var i5 = new c5();
var i5_c = c5;

/// class with statics and constructor
class c6 { /// class with statics and constructor2
    /// s1 comment
    static s1: number; /// s1 comment2
    /// constructor comment
    constructor() { /// constructor comment2
    }
}
var i6 = new c6();
var i6_c = c6;

// class with statics and constructor
class c7 {
    // s1 comment
    static s1: number;
    // constructor comment
    constructor() {
    }
}
var i7 = new c7();
var i7_c = c7;

/** class with statics and constructor
 */
class c8 {
    /** s1 comment */
    static s1: number; /** s1 comment2 */
    /** constructor comment 
    */
    constructor() {
        /** constructor comment2 
        */
    }
}
var i8 = new c8();
var i8_c = c8;

class c9 {
    constructor() {
        /// This is some detached comment

        // should emit this leading comment of } too
    }
}


//// [commentsClass.js]
/** This is class c2 without constuctor*/
class c2 {
} // trailing comment1
var i2 = new c2();
var i2_c = c2;
class c3 {
    /** Constructor comment*/
    constructor() {
    } // trailing comment of constructor
} /* trailing comment 2 */
var i3 = new c3();
var i3_c = c3;
/** Class comment*/
class c4 {
    /** Constructor comment*/
    constructor() {
    } /* trailing comment of constructor 2*/
}
var i4 = new c4();
var i4_c = c4;
/** Class with statics*/
class c5 {
    static s1;
}
var i5 = new c5();
var i5_c = c5;
/// class with statics and constructor
class c6 {
    /// s1 comment
    static s1; /// s1 comment2
    /// constructor comment
    constructor() {
    }
}
var i6 = new c6();
var i6_c = c6;
// class with statics and constructor
class c7 {
    // s1 comment
    static s1;
    // constructor comment
    constructor() {
    }
}
var i7 = new c7();
var i7_c = c7;
/** class with statics and constructor
 */
class c8 {
    /** s1 comment */
    static s1; /** s1 comment2 */
    /** constructor comment
    */
    constructor() {
        /** constructor comment2
        */
    }
}
var i8 = new c8();
var i8_c = c8;
class c9 {
    constructor() {
        /// This is some detached comment
        // should emit this leading comment of } too
    }
}


//// [commentsClass.d.ts]
/** This is class c2 without constuctor*/
declare class c2 {
} // trailing comment1
declare var i2: c2;
declare var i2_c: typeof c2;
declare class c3 {
    /** Constructor comment*/
    constructor(); // trailing comment of constructor
} /* trailing comment 2 */
declare var i3: c3;
declare var i3_c: typeof c3;
/** Class comment*/
declare class c4 {
    /** Constructor comment*/
    constructor(); /* trailing comment of constructor 2*/
}
declare var i4: c4;
declare var i4_c: typeof c4;
/** Class with statics*/
declare class c5 {
    static s1: number;
}
declare var i5: c5;
declare var i5_c: typeof c5;
/// class with statics and constructor
declare class c6 {
    /// s1 comment
    static s1: number; /// s1 comment2
    /// constructor comment
    constructor();
}
declare var i6: c6;
declare var i6_c: typeof c6;
// class with statics and constructor
declare class c7 {
    // s1 comment
    static s1: number;
    // constructor comment
    constructor();
}
declare var i7: c7;
declare var i7_c: typeof c7;
/** class with statics and constructor
 */
declare class c8 {
    /** s1 comment */
    static s1: number; /** s1 comment2 */
    /** constructor comment
    */
    constructor();
}
declare var i8: c8;
declare var i8_c: typeof c8;
declare class c9 {
    constructor();
}
