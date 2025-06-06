//// [tests/cases/conformance/types/typeRelationships/subtypesAndSuperTypes/subtypesOfTypeParameterWithRecursiveConstraints.ts] ////

//// [subtypesOfTypeParameterWithRecursiveConstraints.ts]
// checking whether other types are subtypes of type parameters with constraints

class Foo<T> { foo: T; }
function f<T extends Foo<U>, U extends Foo<T>, V extends Foo<V>>(t: T, u: U, v: V) {
    // ok
    var r1 = true ? t : u;
    var r1 = true ? u : t;

    // ok
    var r2 = true ? t : v;
    var r2 = true ? v : t;

    // ok
    var r3 = true ? v : u;
    var r3 = true ? u : v;

    // ok
    var r4 = true ? t : new Foo<T>();
    var r4 = true ? new Foo<T>() : t;

    // ok
    var r5 = true ? u : new Foo<T>();
    var r5 = true ? new Foo<T>() : u;

    // ok
    var r6 = true ? v : new Foo<T>();
    var r6 = true ? new Foo<T>() : v;


    // ok
    var r7 = true ? t : new Foo<U>();
    var r7 = true ? new Foo<U>() : t;

    // ok
    var r8 = true ? u : new Foo<U>();
    var r8 = true ? new Foo<U>() : u;

    // ok
    var r9 = true ? v : new Foo<U>();
    var r9 = true ? new Foo<U>() : v;


    // ok
    var r10 = true ? t : new Foo<V>();
    var r10 = true ? new Foo<V>() : t;

    // ok
    var r11 = true ? u : new Foo<V>();
    var r11 = true ? new Foo<V>() : u;

    // ok
    var r12 = true ? v : new Foo<V>();
    var r12 = true ? new Foo<V>() : v;
}

module M1 {
    class Base<T> {
        foo: T;
    }

    class D1<T extends Foo<U>, U extends Foo<T>, V extends Foo<V>> extends Base<T> {
        [x: string]: T;
        foo: T
    }

    class D2<T extends Foo<U>, U extends Foo<T>, V extends Foo<V>> extends Base<T> {
        [x: string]: T;
        foo: U
    }

    class D3<T extends Foo<U>, U extends Foo<T>, V extends Foo<V>> extends Base<T> {
        [x: string]: T;
        foo: V
    }

    class D4<T extends Foo<U>, U extends Foo<T>, V extends Foo<V>> extends Base<U> {
        [x: string]: U;
        foo: T
    }

    class D5<T extends Foo<U>, U extends Foo<T>, V extends Foo<V>> extends Base<U> {
        [x: string]: U;
        foo: U
    }

    class D6<T extends Foo<U>, U extends Foo<T>, V extends Foo<V>> extends Base<U> {
        [x: string]: U;
        foo: V
    }

    class D7<T extends Foo<U>, U extends Foo<T>, V extends Foo<V>> extends Base<V> {
        [x: string]: V;
        foo: T
    }

    class D8<T extends Foo<U>, U extends Foo<T>, V extends Foo<V>> extends Base<V> {
        [x: string]: V;
        foo: U
    }

    class D9<T extends Foo<U>, U extends Foo<T>, V extends Foo<V>> extends Base<V> {
        [x: string]: V;
        foo: V
    }
}


module M2 {
    class Base2<T> {
        foo: Foo<T>;
    }

    class D1<T extends Foo<U>, U extends Foo<T>, V extends Foo<V>> extends Base2<T> {
        [x: string]: T;
        foo: T
    }

    class D2<T extends Foo<U>, U extends Foo<T>, V extends Foo<V>> extends Base2<T> {
        [x: string]: T;
        foo: U
    }

    class D3<T extends Foo<U>, U extends Foo<T>, V extends Foo<V>> extends Base2<T> {
        [x: string]: T;
        foo: V
    }

    class D4<T extends Foo<U>, U extends Foo<T>, V extends Foo<V>> extends Base2<U> {
        [x: string]: U;
        foo: T
    }

    class D5<T extends Foo<U>, U extends Foo<T>, V extends Foo<V>> extends Base2<U> {
        [x: string]: U;
        foo: U
    }

    class D6<T extends Foo<U>, U extends Foo<T>, V extends Foo<V>> extends Base2<U> {
        [x: string]: U;
        foo: V
    }

    class D7<T extends Foo<U>, U extends Foo<T>, V extends Foo<V>> extends Base2<V> {
        [x: string]: V;
        foo: T
    }

    class D8<T extends Foo<U>, U extends Foo<T>, V extends Foo<V>> extends Base2<V> {
        [x: string]: V;
        foo: U
    }

    class D9<T extends Foo<U>, U extends Foo<T>, V extends Foo<V>> extends Base2<V> {
        [x: string]: V;
        foo: V
    }
}

//// [subtypesOfTypeParameterWithRecursiveConstraints.js]
// checking whether other types are subtypes of type parameters with constraints
class Foo {
    foo;
}
function f(t, u, v) {
    // ok
    var r1 = true ? t : u;
    var r1 = true ? u : t;
    // ok
    var r2 = true ? t : v;
    var r2 = true ? v : t;
    // ok
    var r3 = true ? v : u;
    var r3 = true ? u : v;
    // ok
    var r4 = true ? t : new Foo();
    var r4 = true ? new Foo() : t;
    // ok
    var r5 = true ? u : new Foo();
    var r5 = true ? new Foo() : u;
    // ok
    var r6 = true ? v : new Foo();
    var r6 = true ? new Foo() : v;
    // ok
    var r7 = true ? t : new Foo();
    var r7 = true ? new Foo() : t;
    // ok
    var r8 = true ? u : new Foo();
    var r8 = true ? new Foo() : u;
    // ok
    var r9 = true ? v : new Foo();
    var r9 = true ? new Foo() : v;
    // ok
    var r10 = true ? t : new Foo();
    var r10 = true ? new Foo() : t;
    // ok
    var r11 = true ? u : new Foo();
    var r11 = true ? new Foo() : u;
    // ok
    var r12 = true ? v : new Foo();
    var r12 = true ? new Foo() : v;
}
var M1;
(function (M1) {
    class Base {
        foo;
    }
    class D1 extends Base {
        foo;
    }
    class D2 extends Base {
        foo;
    }
    class D3 extends Base {
        foo;
    }
    class D4 extends Base {
        foo;
    }
    class D5 extends Base {
        foo;
    }
    class D6 extends Base {
        foo;
    }
    class D7 extends Base {
        foo;
    }
    class D8 extends Base {
        foo;
    }
    class D9 extends Base {
        foo;
    }
})(M1 || (M1 = {}));
var M2;
(function (M2) {
    class Base2 {
        foo;
    }
    class D1 extends Base2 {
        foo;
    }
    class D2 extends Base2 {
        foo;
    }
    class D3 extends Base2 {
        foo;
    }
    class D4 extends Base2 {
        foo;
    }
    class D5 extends Base2 {
        foo;
    }
    class D6 extends Base2 {
        foo;
    }
    class D7 extends Base2 {
        foo;
    }
    class D8 extends Base2 {
        foo;
    }
    class D9 extends Base2 {
        foo;
    }
})(M2 || (M2 = {}));
